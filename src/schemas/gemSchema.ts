import { z } from 'zod';

const gemSchema = z.object({
  name: z.string(),
  description: z.string(),
  rarity: z.string(),
  image: z.string(),
});

export const gemsSchema = z.record(gemSchema);
