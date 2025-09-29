'use client';

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useConvexAuth, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'

const LeaveManagement = () => {
  const router = useRouter();
  const leave_requests = useQuery(api.leave_requests.getLeaveRequests)
  const user = useConvexAuth();
  console.log(user)

  // Calculate leave requests remaining
  const leaveRequestsUsed: number | undefined = leave_requests?.length
  let totalLeaves = 15
  const leavesRemaining = totalLeaves - leaveRequestsUsed!
  
  const handleNewRequest = () => {
    router.push('/leave-management/new-leave-request');
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1">
          <Button 
            onClick={handleNewRequest}
            variant="outline"
            className="max-w-sm"
          >
            New Leave Request
          </Button>
        </div>
        <div>
          <h1>You have {leavesRemaining} leave requests remaining.</h1>
        </div>
      </div>


      <div className="mt-5">
        {!leave_requests && (
          <h1 className="text-gray-800 text-center py-20 font-bold text-3xl">
            You have no leave requests.
          </h1>
        )}

        {leave_requests && (
          <Table className="mt-5">
            <TableHeader>
              <TableRow>
                <TableHead>
                  Name
                </TableHead>
                <TableHead>
                  Leave Start Date
                </TableHead>
                <TableHead>
                  Leave End Date
                </TableHead>
                <TableHead>
                  Status
                </TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {leave_requests?.map((leave_request) => {
                return (
                  <TableRow key={leave_request._id}>
                    <TableCell>{leave_request.name}</TableCell>
                    <TableCell>{leave_request.leaveStartDate}</TableCell>
                    <TableCell>{leave_request.leaveEndDate}</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell className="flex justify-end gap-1">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/leave-management/leave-request/${leave_request._id}`}>
                          <EyeIcon />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}  
            </TableBody>
          </Table>
        )}
      </div>
    </>
  )
}

export default LeaveManagement