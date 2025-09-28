import * as React from "react"

import { Stethoscope, User, LogOut, History, Settings, UserPlus, HeartPulse } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar"

// Menu items.
const items = [
  {
    title: "Patients",
    url: "#",
    icon: User,
  },
  {
    title: "Register Patient",
    url: "#",
    icon: UserPlus,
  },
  {
    title: "Diagnostics",
    url: "#",
    icon: Stethoscope,
  },
  {
    title: "Patient History",
    url: "#",
    icon: History,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Log Out",
    url: "",
    icon: LogOut,
  }
]

function AppSidebar() {
  return (
    <Sidebar className="h-[100vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700 shadow-2xl">
      <SidebarContent className="p-6">
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-3 text-white mb-8 mt-4 pb-6  border-slate-700">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
              <HeartPulse className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-500">
                HealthCare Plus
              </h1>
              <p className="text-sm text-slate-400 font-normal">Medical Clinic</p>
            </div>
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`group relative overflow-hidden rounded-xl ${
                      index === items.length - 1 
                        ? 'mt-6 text-red-400 hover:from-red-600/20 hover:to-red-500/20 hover:shadow-red-500/10' 
                        : 'text-slate-300'
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-4 px-4 py-3">
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        index === items.length - 1 
                          ? 'bg-red-500/10 group-hover:bg-red-500/20' 
                          : ''
                      }`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {item.title}
                      </span>
                      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-r"></div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar