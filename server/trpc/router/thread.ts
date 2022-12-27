import { db } from './../../db/client';
import { router, protectedProcedure } from "../trpc";

export const threadRouter = router({
  getThreads: protectedProcedure.query(({ ctx }) => {
    return db.thread.findMany({
      where: {
        usersInThread: {
          some: {
            user: {
              id: {
                contains: ctx.session.user.id
              }
            }
          }
        }
      },
      select: {
        id: true,
        name: true,
        usersInThread: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                image: true,
              }
            }
          }
        },
        messages: {
          select: {
            id: true,
            content: true,
          }
        }
      }
    })
  }),
});
