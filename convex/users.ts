import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Create a new user
export const createUser = mutation({
    args: {
        name: v.string(),
        emailAddress: v.string(),
        extension: v.string(),
        position: v.string(),
        department: v.string(),
        cug: v.string(),
        address: v.string(),
        branch: v.string()
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("users", {
            name: args.name,
            emailAddress: args.emailAddress,
            extension: args.extension,
            position: args.position,
            department: args.department,
            cug: args.cug,
            address: args.address,
            branch: args.branch
        });
    }
})

// Query all employees
export const getEmployees = query({
    handler: async (ctx) => {
        return ctx.db.query("users").collect()
    },
});

// Query a single employee
export const getEmployee = query({
    args: {
        id: v.id("users")
    },
    handler: async (ctx, args) => {
        const employee = await ctx.db.get(args.id);
        return employee;
    }
})