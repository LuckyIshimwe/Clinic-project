import React from 'react'
import { Search, MoreVertical } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

const patientsData = [
  {
    id: 'PT001',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    phone: '+1-555-0123',
    email: 'john.doe@email.com',
    status: 'active',
    condition: 'Hypertension',
    lastVisit: 'Jan 15, 2024',
    nextAppointment: 'Feb 15, 2024',
    appointmentSoon: true
  },
  {
    id: 'PT002',
    name: 'Jane Smith',
    age: 32,
    gender: 'Female',
    phone: '+1-555-0124',
    email: 'jane.smith@email.com',
    status: 'active',
    condition: 'Diabetes Type 2',
    lastVisit: 'Jan 12, 2024',
    nextAppointment: 'Jan 28, 2024',
    appointmentSoon: true
  },
  {
    id: 'PT003',
    name: 'Robert Johnson',
    age: 58,
    gender: 'Male',
    phone: '+1-555-0125',
    email: 'robert.j@email.com',
    status: 'inactive',
    condition: 'Arthritis',
    lastVisit: 'Jan 10, 2024',
    nextAppointment: 'None scheduled',
    appointmentSoon: false
  },
  {
    id: 'PT004',
    name: 'Emily Davis',
    age: 28,
    gender: 'Female',
    phone: '+1-555-0126',
    email: 'emily.davis@email.com',
    status: 'active',
    condition: 'Asthma',
    lastVisit: 'Jan 8, 2024',
    nextAppointment: 'Jan 22, 2024',
    appointmentSoon: true
  }
]

export function PatientTable() {
  return (
    <Card className="mt-6 shadow-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Recent Patients</CardTitle>
          <div className="relative w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search patients..."
              className="pl-8"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead>Next Appointment</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientsData.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{patient.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {patient.id} • {patient.age}y • {patient.gender}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{patient.phone}</div>
                      <div className="text-muted-foreground">{patient.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={patient.status === 'active' ? 'default' : 'secondary'}
                      className={patient.status === 'active' ? 'border-green-200 text-green-800 bg-green-100 hover:border-green-200 hover:text-green-800 hover:bg-green-100' : 'border-gray-200 text-gray-800 bg-gray-100 hover:border-gray-200 hover:text-gray-800 hover:bg-gray-100'}
                    >
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{patient.condition}</TableCell>
                  <TableCell className="text-sm">{patient.lastVisit}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm">{patient.nextAppointment}</div>
                      {patient.appointmentSoon && (
                        <Badge variant="outline" className="w-fit text-xs">Soon</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Patient</DropdownMenuItem>
                        <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Delete Patient</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

