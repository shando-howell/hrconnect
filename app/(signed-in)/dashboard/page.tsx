"use client"

import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { Authenticated, useQuery } from 'convex/react'
import { Calendar, User2Icon } from 'lucide-react'

const DashBoard = () => {
  const { user } = useUser();
  console.log(user)

  // Calculate today's date
  const today = new Date();
  const date = today.toLocaleDateString('en-US');

  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1">
          <Authenticated>
            <div className="flex flex-row text-gray-900">
              <User2Icon className="mr-2"/>
              <h1>{user?.fullName}</h1>
            </div>
          </Authenticated>
        </div>
        <div>
          <div className="flex flex-row text-gray-900">
            <Calendar className="mr-2" />
            <h1>{date}</h1>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-gray-800 text-center py-20 font-bold text-3xl">
          Development in progress
        </h1>
      </div>
    </>
  )
}

export default DashBoard