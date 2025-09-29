'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import  { createContext, useContext, useState } from 'react';

type leavesRemaining = number;

interface LeaveRemainingContextType {
    leavesRemaining: leavesRemaining | null;
}

const LeavesRemainingContext = createContext<LeaveRemainingContextType | null>(null);

export const LeavesRemainingProvider = ({ children }: { children: React.ReactNode }) => {
    const [leavesRemaining, setLeavesRemaining] = useState<leavesRemaining | null>(null)
    const leave_requests = useQuery(api.leave_requests.getLeaveRequests);
    const leaveRequestsUsed: number | undefined = leave_requests?.length;

    const totalLeaves = 15;
    const calcLeaves = totalLeaves - leaveRequestsUsed!
    setLeavesRemaining(calcLeaves)

    const value = leavesRemaining

    return (
        <LeavesRemainingContext.Provider value={value}>
            {children}
        </LeavesRemainingContext.Provider>
    );
};

export const useLeavesRemaining = () => {
    return useContext(LeavesRemainingContext);
}