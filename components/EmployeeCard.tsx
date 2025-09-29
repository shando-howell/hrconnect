'use client'

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const EmployeeCard = ({ employeeId } : { employeeId: Id<"users"> }) => {
    const employee = useQuery(api.users.getEmployee, { id: employeeId });

    return (
        <div>
            <div className="flex justify-center">
                <Card className="w-full max-w-4xl">
                    <CardHeader>
                        <CardTitle className="flex justify-center text-2xl m-4">
                            <h1>Employee Information</h1>
                        </CardTitle>
                        <CardDescription className="text-xl">
                            <h2>Employee Name: {employee?.name}</h2>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center">
                                <h2 className="mr-1">Position:</h2>
                                <div>
                                    <h2>{employee?.position}</h2>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h2 className="mr-1">Extension</h2>
                                <div>
                                    <h2>{employee?.extension}</h2>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <h3 className="mr-1">Email Address:</h3>
                                <div>
                                    <h3>{employee?.emailAddress}</h3>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <h3 className="mr-1">Branch:</h3>
                                <div>
                                    <h3>{employee?.branch}</h3>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <h3 className="mr-1">Department:</h3>
                                <div>
                                    <h3>{employee?.department}</h3>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <h3 className="mr-1">CUG:</h3>
                                <div>
                                    <h3>{employee?.cug}</h3>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <h3 className="mr-1">Address:</h3>
                                <div>
                                    <h3>{employee?.address}</h3>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}



export default EmployeeCard