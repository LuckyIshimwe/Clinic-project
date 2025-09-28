import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarInset,
} from "./components/ui/sidebar"
import AppSidebar from "./components/ui/app-sidebar"
import Header from "./components/ui/header"
import Main from "./components/ui/main"
import StudentTable from "./components/main-dashboard/student-table"
import PopOver from "./components/main-dashboard/popover-table"
function App() {
  return (
    <SidebarProvider
    >
      <Sidebar>
        <AppSidebar variant='inset'/>
      </Sidebar>

      <SidebarInset className="bg-gray-100">
        <header className="relative">
          <SidebarTrigger className="absolute top-0 left-0"/>
          <Header className="p-0"/>
        </header>
        <main className="p-0 bg-gray-100">
          <Main />
          <StudentTable />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App;
