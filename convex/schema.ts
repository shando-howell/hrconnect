import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    leave_requests: defineTable({
        userId: v.string(),
        employeeName: v.string(),
        leaveStartDate: v.number(),
        leaveEndDate: v.number()
    }),
    users: defineTable({
        userId: v.string(),
        name: v.string(),
        email: v.string(),
    })
})