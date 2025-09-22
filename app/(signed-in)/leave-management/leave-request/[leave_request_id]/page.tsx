import LeaveRequestCard from "@/components/LeaveRequestCard";

const LeaveRequest = async ({ params }: {
  params: Promise<any>
}) => {
  const paramsValue = await params;
  const leave_request_id = paramsValue.leave_request_id

  return (
    <div>
      <LeaveRequestCard leaveRequestId={leave_request_id} />
    </div>
  )
}

export default LeaveRequest