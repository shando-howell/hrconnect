'use client';

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useConvexAuth, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'

const EmployeesPage = () => {
  const router = useRouter();
  const employees = useQuery(api.users.getEmployees)
  const user = useConvexAuth();
  console.log(user)

  const handleNewEmployee = () => {
    router.push('/employees/new-employee');
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1">
          <Button
            onClick={handleNewEmployee}
            variant="outline"
            className="max-w-sm"
          >
            New Employee
          </Button>
        </div>
      </div>

      <div className="mt-5">
        {!employees && (
          <h1 className="text-gray-800 text-center py-20 font-bold text-3xl">
            No employees found.
          </h1>
        )}

        {employees && (
          <Table className="mt-5">
            <TableHeader>
              <TableRow>
                <TableHead>
                  Name
                </TableHead>
                <TableHead>
                  Extension
                </TableHead>
                <TableHead>
                  Department
                </TableHead>
                <TableHead>
                  Branch
                </TableHead>
                <TableHead>
                  CUG
                </TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees?.map((employee) => {
                return (
                  <TableRow key={employee._id}>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.extension}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.branch}</TableCell>
                    <TableCell>{employee.cug}</TableCell>
                    <TableCell className="flex justify-end gap-1">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/employees/employee/${employee._id}`}>
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

export default EmployeesPage