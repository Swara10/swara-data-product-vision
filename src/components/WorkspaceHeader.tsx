
import { Bell, SidebarTrigger, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface WorkspaceHeaderProps {
  workspaceName: string;
}

export function WorkspaceHeader({ workspaceName }: WorkspaceHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="lg:hidden" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{workspaceName}</h1>
          <p className="text-sm text-gray-500">Welcome back! Here's what's happening today.</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="relative hover:bg-gray-100">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
          <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-medium">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
