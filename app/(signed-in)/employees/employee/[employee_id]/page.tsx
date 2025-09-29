import EmployeeCard from "@/components/EmployeeCard";

const Employee = async ({ params }: {
    params: Promise<any>
}) => {
    const paramsValue = await params;
    const employee_id = paramsValue.employee_id

    return (
        <div>
            <EmployeeCard employeeId={employee_id} />
        </div>
    )
}

export default Employee