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

// Employee form schema
const employeeFormSchema = z.object({
    name: z.string().min(5).max(50),
    emailAddress: z.string(),
    extension: z.string(),
    position: z.string(),
    department: z.string(),
    cug: z.string(),
    address: z.string(),
    branch: z.string()
})

const EmployeeForm = () => {
    const router = useRouter();
    const createEmployee = useMutation(api.users.createUser);

    const form = useForm<z.infer<typeof employeeFormSchema>>({
        resolver: zodResolver(employeeFormSchema),
        defaultValues: {
            name: "",
            emailAddress: "",
            extension: "",
            position: "",
            department: "",
            cug: "",
            address: "",
            branch: ""
        },
    })

    const onSubmit = (values: z.infer<typeof employeeFormSchema>) => {
        // Database mutation function
        createEmployee(values);

        toast.success("Success", {
            description: "Employee record created."
        });
        console.log(values)
        router.push("/employees")
    }

    return (
        <>
            <Card className="w-full max-w-4xl mx-auto px-4">
                <CardHeader>
                    <CardTitle>New Employee</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Employee name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="emailAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email address" {...field} />
                                        </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="extension"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Extension</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Extension" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="position"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Position</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Position" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="department"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Department</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Department" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="cug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CUG</FormLabel>
                                        <FormControl>
                                            <Input placeholder="CUG" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Address" {...field} />
                                        </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField 
                                control={form.control}
                                name="branch"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Branch</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Branch" {...field} />
                                        </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="max-w-md mx-auto mt-2 w-full flex gap-2"
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

export default EmployeeForm