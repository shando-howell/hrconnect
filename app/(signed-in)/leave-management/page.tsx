'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { EyeIcon, PencilIcon } from 'lucide-react'
import Link from 'next/link'

const LeaveManagement = () => {
  const router = useRouter();
  const leave_requests = useQuery(api.leave_requests.getLeaveRequests)

  const handleNewRequest = () => {
    router.push('/leave-management/new-leave-request');
  }

  return (
    <>
      <Button 
        onClick={handleNewRequest}
        variant="outline"
        className="max-w-sm"
      >
        New Leave Request
      </Button>

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
                    <TableCell>{leave_request.employeeName}</TableCell>
                    <TableCell>{leave_request.leaveStartDate}</TableCell>
                    <TableCell>{leave_request.leaveEndDate}</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell className="flex justify-end gap-1">
                      <Button asChild variant="outline" size="sm">
                        <Link href="#">
                          <EyeIcon />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href="#">
                          <PencilIcon />
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