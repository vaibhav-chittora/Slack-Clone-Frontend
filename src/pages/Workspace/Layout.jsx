import { WorkspaceNavbar } from "@/components/organisms/Workspace/WorkspaceNavbar"
import { WorkspaceSidebar } from "@/components/organisms/Workspace/WorkspaceSidebar"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
            <WorkspaceNavbar />
            <div className="flex h-[calc(100vh-40px)]">
                <WorkspaceSidebar />
                <ResizablePanelGroup direction="horizontal" autoSaveId={"workspace-resize"} >
                    <ResizablePanel
                        defaultSize={40}
                        minSize={20}
                        className="bg-slack-medium"

                    >
                        <div>
                            Sidebar
                        </div>


                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel
                        minSize={20}
                    >
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
                <h1>Workspaces</h1>
            </div>


        </div>
    )
}