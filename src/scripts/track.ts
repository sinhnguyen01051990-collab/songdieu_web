/** Gửi sự kiện tới GA4 (gtag), Meta Pixel (fbq), TikTok (ttq) nếu đã cài; luôn đẩy vào dataLayer. */
type Params = Record<string, unknown>;
const META_MAP: Record<string, string> = { purchase_lead: 'Lead', generate_lead: 'Contact', click_call: 'Contact', click_zalo: 'Contact', form_start: 'InitiateCheckout' };
export function track(event: string, params: Params = {}) {
  const w = window as any;
  try {
    (w.dataLayer = w.dataLayer || []).push({ event, ...params });
    w.gtag?.('event', event, params);
    const meta = META_MAP[event];
    if (meta && w.fbq) w.fbq('track', meta, { content_name: params.product, value: params.value, currency: params.currency });
    if (meta && w.ttq) w.ttq.track(meta === 'Lead' ? 'SubmitForm' : 'Contact', { content_name: params.product, value: params.value, currency: params.currency });
  } catch { /* không để lỗi đo lường ảnh hưởng trải nghiệm */ }
}
