import { v } from 'convex/values';
import { query, mutation } from './_generated/server';

// Create a new user
export const createUser = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        email: v.string()
    },
    handler: async (ctx, { userId, name, email}) => {
        const newUserId = await ctx.db.insert("users", {
            userId,
            name,
            email
        });

        return newUserId;
    }
})