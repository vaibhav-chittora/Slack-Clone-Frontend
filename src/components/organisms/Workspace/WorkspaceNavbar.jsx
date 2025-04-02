import { Button } from "@/components/ui/button";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { InfoIcon, LucideLoader2, SearchIcon } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const WorkspaceNavbar = () => {
    const { workspaceId } = useParams();
    const { isFetching, workspace } = useGetWorkspaceById(workspaceId);
    const { setCurrentWorkspace } = useCurrentWorkspace();

    useEffect(() => {
        if (workspace) {
            setCurrentWorkspace(workspace)
        }
    }, [workspace, setCurrentWorkspace])

    if (isFetching) {
        return <LucideLoader2 className="animate-spin ml-2" />
    }


    return (
        <nav className="flex items-center justify-center p-1.5 h-10 bg-slack-dark">
            <div className="flex-1" />

            <div>
                <Button
                    size="sm"
                    className='bg-accent/25 hover:bg-accent/30 w-full justify-start h-7 px-2'>
                    <SearchIcon className="size-5 text-white mr-2" />
                    <span className="text-white text-sm">
                        Search in {workspace?.name || "Workspace"}
                    </span>
                </Button>
            </div>

            <div className="ml-auto flex-1 flex items-center justify-end">
                <Button
                    variant='transparent'
                    size='iconSm'
                >
                    <InfoIcon className="size-5 text-white" />
                </Button>
            </div>

        </nav>
    )
}