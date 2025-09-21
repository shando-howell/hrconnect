import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create leave requests
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

// Query leave requests
export const getLeaveRequests = query({
    handler: async (ctx) => {
        return ctx.db.query("leave_requests").collect()
    },
});