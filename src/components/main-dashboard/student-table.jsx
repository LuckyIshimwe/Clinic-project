import {MoreVertical} from "lucide-react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const TableInfo = [
  {
    id: "PT001",
    name: "John Doe",
    age: 45,
    gender: "Male",
    phone: "+1-555-0123",
    email: "john.doe@email.com",
    status: "active",
    condition: "Hypertension",
    lastVisit: "Jan 15, 2024",
    nextVisit: "Feb 15, 2024Soon",
    icon: MoreVertical,
  },
  {
    id: "PT002",
    name: "Jane Smith",
    age: 38,
    gender: "Female",
    phone: "+1-555-0456",
    email: "jane.smith@email.com",
    status: "active",
    condition: "Diabetes",
    lastVisit: "Feb 10, 2024",
    nextVisit: "Mar 10, 2024Soon",
    icon: MoreVertical,
  },
  {
    id: "PT003",
    name: "Michael Brown",
    age: 52,
    gender: "Male",
    phone: "+1-555-0789",
    email: "michael.brown@email.com",
    status: "inactive",
    condition: "Asthma",
    lastVisit: "Dec 5, 2023",
    nextVisit: "Jan 5, 2024Soon",
    icon: MoreVertical,
  },
  {
    id: "PT004",
    name: "Emily Davis",
    age: 29,
    gender: "Female",
    phone: "+1-555-1011",
    email: "emily.davis@email.com",
    status: "active",
    condition: "Allergy",
    lastVisit: "Mar 3, 2024",
    nextVisit: "Apr 3, 2024Soon",
    icon: MoreVertical,
  },
]

export default function StudentTable() {
  const handleDelete = (patientId) => {
    console.log("Delete patient:", patientId)
    //Where my group will put Delete Logi
  }

  const handleUpdate = (patientId) => {
    console.log("Update patient:", patientId)
    // Your my backend group will put update logic
  }

  return (
    <div className="bg-white p-10">
      <Table className="w-full shadow-md overflow-hidden border-collapse">
        <TableCaption className="text-gray-500 text-sm">Recent Patients Info</TableCaption>
        
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="text-left p-3">Patient</TableHead>
            <TableHead className="text-left p-3">Status</TableHead>
            <TableHead className="text-left p-3">Condition</TableHead>
            <TableHead className="text-left p-3">Last Visit</TableHead>
            <TableHead className="text-left p-3">Next Visit</TableHead>
            <TableHead className="text-left p-3">Contact</TableHead>
            <TableHead className="text-left p-3">Action</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {TableInfo.map((patient) => (
            <TableRow
              key={patient.id}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <TableCell className="font-medium p-3">
                {patient.name} <br />
                <span className="text-gray-500 text-sm">
                  {patient.id} • {patient.age}y • {patient.gender}
                </span>
              </TableCell>
              
              <TableCell
                className={`p-3 font-semibold ${
                  patient.status === "active"
                    ? "text-green-700 bg-green-100 rounded text-center h-10"
                    : patient.status === "inactive"
                    ? "text-gray-700 bg-gray-200 rounded text-center"
                    : "text-red-500 bg-red-500 rounded text-center"
                }`}
              >
                {patient.status}
              </TableCell>
              
              <TableCell className="p-3">{patient.condition}</TableCell>
              <TableCell className="p-3">{patient.lastVisit}</TableCell>
              <TableCell className="p-3">{patient.nextVisit}</TableCell>
              
              <TableCell className="p-3 text-sm text-gray-600">
                {patient.phone} <br />
                {patient.email}
              </TableCell>
              
              <TableCell className="p-3">
                <Popover>
                  <PopoverTrigger>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-gray-200">
                    <div className="flex flex-col space-y-1">
                      <button 
                        onClick={() => handleUpdate(patient.id)}
                        className="px-3 py-2 text-sm text-left hover:bg-gray-100 rounded"
                      >
                        Update
                      </button>
                      <button 
                        onClick={() => handleDelete(patient.id)}
                        className="px-3 py-2 text-sm text-left hover:bg-red-50 text-red-600 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}