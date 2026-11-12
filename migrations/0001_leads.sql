-- Đơn hàng / yêu cầu tư vấn từ website
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  type TEXT NOT NULL,            -- order | contact
  product TEXT, offer TEXT,
  name TEXT NOT NULL, phone TEXT NOT NULL,
  address TEXT, email TEXT, message TEXT,
  page TEXT, utm TEXT, country TEXT, user_agent TEXT,
  forwarded INTEGER NOT NULL DEFAULT 0, -- 1 = đã đẩy sang n8n thành công
  status TEXT NOT NULL DEFAULT 'new'
);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
