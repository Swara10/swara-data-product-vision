
import { 
  Home, 
  FolderOpen, 
  Users, 
  Calendar, 
  Settings, 
  Plus,
  Search,
  BarChart3
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Projects",
    url: "#",
    icon: FolderOpen,
  },
  {
    title: "Team",
    url: "#",
    icon: Users,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
  },
];

const recentProjects = [
  "Website Redesign",
  "Mobile App",
  "Marketing Campaign",
  "Product Launch"
];

export function WorkspaceSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-gray-900">Workspace</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <Button className="w-full justify-start gap-2 mb-4" size="sm">
              <Plus className="w-4 h-4" />
              New Project
            </Button>
            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-gray-100 transition-colors">
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg">
                      <item.icon className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
            Recent Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentProjects.map((project) => (
                <SidebarMenuItem key={project}>
                  <SidebarMenuButton asChild className="hover:bg-gray-100 transition-colors">
                    <a href="#" className="flex items-center gap-3 px-3 py-1.5 rounded-lg">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600 truncate">{project}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-100 transition-colors">
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg">
                <Settings className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
