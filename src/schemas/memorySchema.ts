import { z } from 'zod';

const memorySchema = z.object({
  name: z.string(),
  cooldownTime: z.number(),
  maxCharges: z.number(),
  addedCharges: z.number(),
  description: z.string(),
  shortDescription: z.string(),
  rarity: z.string(),
  type: z.string(),
  traveller: z.string(),
  travelerMemoryLocation: z.string(),
  tags: z.array(z.string()),
  image: z.string(),
});

export const memoriesSchema = z.record(memorySchema);
