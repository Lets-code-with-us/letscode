import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/server';
import { Jobs } from '@repo/schema-config/schemas';
import { Product } from '@repo/schema-config/schemas';
import { Auth } from '@repo/schema-config/schemas';
import { DB } from '@repo/database-config/database';

DB(process.env.DB!);
const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => {
      return {
        db: {
          Jobs,
          Product,
          Auth,
        },
      };
    },
  });
};

export { handler as GET, handler as POST };
