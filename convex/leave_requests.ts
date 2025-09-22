import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create leave request
export const createLeaveRequest = mutation({
    args: {
        employeeName: v.string(),
        leaveStartDate: v.string(),
        leaveEndDate: v.string()
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("leave_requests", {
            employeeName: args.employeeName,
            leaveStartDate: args.leaveStartDate,
            leaveEndDate: args.leaveEndDate
        })
    }
})

// Query all leave requests
export const getLeaveRequests = query({
    handler: async (ctx) => {
        return ctx.db.query("leave_requests").collect()
    },
});

// Query a single leave request
export const getLeaveRequest = query({
    args: {
        id: v.id("leave_requests")
    },
    handler: async (ctx, args) => {
        const leave_request = await ctx.db.get(args.id);
        return leave_request;
    },
});