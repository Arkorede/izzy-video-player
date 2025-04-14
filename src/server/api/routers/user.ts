
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany();
  }),

  addUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        // ... other fields
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: input,
      });
    }),
});