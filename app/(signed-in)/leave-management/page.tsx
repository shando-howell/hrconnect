'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

const LeaveManagement = () => {
  const router = useRouter();
  const leave_requests = useQuery(api.leave_requests.getLeaveRequests)

  const handleNewRequest = () => {
    router.push('/leave-management/new-leave-request');
  }

  return (
    <>
      <div>
        <h1>Leave Management</h1>
        <Button onClick={handleNewRequest}>New Leave Request</Button>
        {leave_requests?.map((leave_request) => {
          return <div key={leave_request._id}>{leave_request.employeeName}</div>
        })}
      </div>
    </>
  )
}

export default LeaveManagement