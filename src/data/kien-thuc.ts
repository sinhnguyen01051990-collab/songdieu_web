import type { CollectionEntry } from 'astro:content';

// chủ đề bài Kiến thức theo sản phẩm liên quan
const TOPIC: Record<string, string> = {
  'vien-uong-noi-tiet-xuan-nu-nhan': 'Nội tiết',
  'gel-gung-que-sdbody': 'Vóc dáng',
  'tra-tao-meo': 'Trà thảo mộc',
  'tra-mam-xoi-tu-vi': 'Trà thảo mộc',
  'but-gel-hoang-cung-bao-phu-khang': 'Vùng kín',
};

export function postMeta(post: CollectionEntry<'tinTuc'>) {
  const words = (post.body ?? '').replace(/[#*_>`\[\]()|-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return {
    topic: post.data.product ? TOPIC[post.data.product] : undefined,
    minutes: Math.max(2, Math.round(words / 200)),
  };
}
