import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    leave_requests: defineTable({
        employeeName: v.string(),
        leaveStartDate: v.string(),
        leaveEndDate: v.string()
    }),
    users: defineTable({
        userId: v.string(),
        name: v.string(),
        email: v.string(),
    })
})