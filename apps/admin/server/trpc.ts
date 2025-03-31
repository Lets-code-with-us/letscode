import { initTRPC } from '@trpc/server';
import { Jobs } from '@repo/schema-config/schemas';
import { Product } from '@repo/schema-config/schemas';
import { Auth } from '@repo/schema-config/schemas';

const t = initTRPC
  .context<{
    db: { Jobs: typeof Jobs; Product: typeof Product; Auth: typeof Auth };
  }>()
  .create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
