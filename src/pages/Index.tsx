
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { WorkspaceSidebar } from "@/components/WorkspaceSidebar";
import { WorkspaceHeader } from "@/components/WorkspaceHeader";
import { WorkspaceContent } from "@/components/WorkspaceContent";

const Index = () => {
  const [activeWorkspace, setActiveWorkspace] = useState("My Workspace");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <WorkspaceSidebar />
        <div className="flex-1 flex flex-col">
          <WorkspaceHeader workspaceName={activeWorkspace} />
          <WorkspaceContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
