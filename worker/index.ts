/**
 * Worker SONG DIỆU
 * - /api/lead (POST): nhận đơn hàng / yêu cầu tư vấn → lưu D1 → chuyển tiếp n8n (không chặn phản hồi)
 * - /api/health (GET): kiểm tra nhanh
 * Mọi đường dẫn khác do Static Assets (./dist) phục vụ trực tiếp, không qua Worker.
 */
interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  N8N_WEBHOOK_URL?: string;
}

const ALLOWED_ORIGINS = ['https://songdieu.vn', 'https://www.songdieu.vn', 'http://localhost:4321'];
const PHONE_RE = /^(0|\+?84)(3|5|7|8|9)\d{8}$/;
const clip = (v: unknown, n: number) => (typeof v === 'string' ? v.trim().slice(0, n) : '');

function json(body: unknown, status = 200, origin?: string | null) {
  const h: Record<string, string> = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' };
  if (origin && ALLOWED_ORIGINS.includes(origin)) h['access-control-allow-origin'] = origin;
  return new Response(JSON.stringify(body), { status, headers: h });
}

async function handleLead(req: Request, env: Env, ctx: ExecutionContext) {
  const origin = req.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.includes(origin)) return json({ ok: false, error: 'origin' }, 403);
  let data: Record<string, unknown>;
  try { data = await req.json(); } catch { return json({ ok: false, error: 'json' }, 400, origin); }

  // Bẫy bot: trường ẩn "website" phải để trống
  if (clip(data.website, 200)) return json({ ok: true }, 200, origin);

  const lead = {
    type: clip(data.type, 20) === 'contact' ? 'contact' : 'order',
    product: clip(data.product, 120),
    offer: clip(data.offer, 160),
    name: clip(data.name, 80),
    phone: clip(data.phone, 20).replace(/[\s.\-()]/g, ''),
    address: clip(data.address, 300),
    email: clip(data.email, 120),
    message: clip(data.message, 1000),
    page: clip(data.page, 300),
    utm: clip(data.utm, 300),
    consent: data.consent === true || data.consent === 'on',
  };
  if (!lead.name || !PHONE_RE.test(lead.phone)) return json({ ok: false, error: 'invalid' }, 422, origin);
  if (!lead.consent) return json({ ok: false, error: 'consent' }, 422, origin);

  const country = (req as any).cf?.country ?? '';
  const ua = clip(req.headers.get('user-agent'), 300);
  const res = await env.DB.prepare(
    `INSERT INTO leads (type, product, offer, name, phone, address, email, message, page, utm, country, user_agent)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?) RETURNING id, created_at`
  ).bind(lead.type, lead.product, lead.offer, lead.name, lead.phone, lead.address, lead.email, lead.message, lead.page, lead.utm, country, ua)
   .first<{ id: number; created_at: string }>();

  if (env.N8N_WEBHOOK_URL && res) {
    ctx.waitUntil((async () => {
      try {
        const r = await fetch(env.N8N_WEBHOOK_URL!, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ source: 'songdieu.vn', id: res.id, created_at: res.created_at, ...lead, country }),
        });
        if (r.ok) await env.DB.prepare('UPDATE leads SET forwarded = 1 WHERE id = ?').bind(res.id).run();
      } catch { /* n8n lỗi: đơn vẫn nằm trong D1 (forwarded = 0) */ }
    })());
  }
  return json({ ok: true, id: res?.id }, 200, origin);
}

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/api/lead') {
      if (req.method === 'OPTIONS') {
        const o = req.headers.get('origin');
        return new Response(null, { status: 204, headers: {
          'access-control-allow-origin': o && ALLOWED_ORIGINS.includes(o) ? o : 'https://songdieu.vn',
          'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type', 'access-control-max-age': '86400' } });
      }
      if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
      return handleLead(req, env, ctx);
    }
    if (url.pathname === '/api/health') return json({ ok: true });
    return env.ASSETS.fetch(req);
  },
} satisfies ExportedHandler<Env>;
