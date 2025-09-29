import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    leave_requests: defineTable({
        name: v.string(),
        leaveStartDate: v.string(),
        leaveEndDate: v.string()
    }),
    users: defineTable({
        name: v.string(),
        emailAddress: v.string(),
        extension: v.string(),
        position: v.string(),
        department: v.string(),
        cug: v.string(),
        address: v.string(),
        branch: v.string()
    })
})