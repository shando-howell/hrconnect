"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Leave request form schema
const leaveRequestFormSchema = z.object({
    employeeName: z.string().min(2).max(50),
    leaveStartDate: z.string().min(16).max(20),
    leaveEndDate: z.string().min(16).max(20)
})

const LeaveRequestForm = () => {
    const router = useRouter();
    const createLeaveRequest = useMutation(api.leave_requests.createLeaveRequest);

    const form = useForm<z.infer<typeof leaveRequestFormSchema>>({
        resolver: zodResolver(leaveRequestFormSchema),
        defaultValues: {
            employeeName: "",
            leaveStartDate: "",
            leaveEndDate: "",
        },
    })

    const onSubmit = (values: z.infer<typeof leaveRequestFormSchema>) => {
        // Add mutation server action
        createLeaveRequest(values)

        toast.success("Success", {
            description: "Leave request submitted",
        });
        console.log(values)
        router.push("/leave-management")
    }

    return (
        <>
            <Card className="w-full max-w-4xl mx-auto px-4">
                <CardHeader>
                    <CardTitle>New Leave Request</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="employeeName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                    </FormItem>
                                )}
                            />
        
                            <FormField
                                control={form.control}
                                name="leaveStartDate"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date Leave Starts</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Date Leave starts" {...field} />
                                    </FormControl>
                                <FormMessage />
                                </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="leaveEndDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date Leave Ends</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Date leave ends" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />        
                            <Button 
                                type="submit"
                                className="max-w-md mx-auto mt-2 w-full flex gap-2"
                                disabled={form.formState.isSubmitting}
                            >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}

export default LeaveRequestForm;