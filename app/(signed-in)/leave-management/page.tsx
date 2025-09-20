'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

const LeaveManagement = () => {
  const router = useRouter();

  const handleNewRequest = () => {
    router.push('/leave-management/new-leave-request');
  }

  return (
    <>
      <div>
        <h1>Leave Management</h1>
        <Button onClick={handleNewRequest}>New Leave Request</Button>
      </div>
    </>
  )
}

export default LeaveManagement