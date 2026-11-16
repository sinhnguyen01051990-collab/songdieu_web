import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tinTuc = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tin-tuc' }),
  // image: ảnh bìa bài (đường dẫn tương đối tới src/assets); bỏ trống thì thẻ dùng ảnh sản phẩm liên quan
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    product: z.string().optional(),
    image: image().optional(),
  }),
});

export const collections = { tinTuc };
