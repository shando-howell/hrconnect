'use client'

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const LeaveRequestCard = ({ leaveRequestId } : {leaveRequestId: Id<"leave_requests">}) => {
  const leave_request = useQuery(api.leave_requests.getLeaveRequest, { id: leaveRequestId });

  return (
    <>
    <div className="flex justify-center">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex justify-center text-4xl m-4">
            <h1>Leave Request</h1>
          </CardTitle>
          <CardDescription className="text-xl">
            <h2>Employee Name: {leave_request?.employeeName}</h2>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div className="flex items-center">
              <h3 className="mr-1">Dates requested:</h3>
              <div>
                <h3>{leave_request?.leaveStartDate} to {leave_request?.leaveEndDate}</h3>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  )
}

export default LeaveRequestCard;