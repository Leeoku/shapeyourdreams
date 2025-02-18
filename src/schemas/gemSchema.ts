import { z } from 'zod';

const gemSchema = z.object({
  name: z.string().default(''),
  description: z.string().default(''),
  rarity: z.string().default('Common'),
  image: z.string().default(''),
});

export const gemsSchema = z.record(gemSchema);
export const gemsFilterSchema =  gemSchema.omit({image:true})
export type  gemsFilterType = z.infer<typeof gemsFilterSchema>