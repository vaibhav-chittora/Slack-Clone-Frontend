import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace"
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal"
import { useToast } from "@/hooks/use-toast"
import { TrashIcon } from "lucide-react"
import { useEffect, useState } from "react"

export const WorkspacePreferencesModal = () => {

    const { initialValue, openPreferences, setOpenPreferences, workspace } = useWorkspacePreferencesModal();

    const [workspaceId, setWorkspaceId] = useState(null);
    const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);

    const { toast } = useToast();

    useEffect(() => {
        setWorkspaceId(workspace?._id)
    }, [workspace])

    async function handleDeleteWorkspace() {
        try {
            await deleteWorkspaceMutation();
            toast({
                title: "Workspace deleted successfully",
                type: "success",
            })
        } catch (error) {
            console.log("Error in deleting workspace", error)
            toast({
                title: "Error in deleting workspace",
                type: "error",
            })
        }
    }


    return (
        <Dialog open={openPreferences} onOpenChange={setOpenPreferences}>
            <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                <DialogHeader className='p-4 border-bottom bg-white ' >
                    <DialogTitle>
                        Preferences
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <div
                        className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 "
                    >
                        <div className="flex items-center justify-between">
                            <p
                                className="font-semibold text-sm"
                            >
                                Workspace Name

                            </p>
                            <p
                                className="text-sm font-semibold hover:underline"
                            >
                                Edit
                            </p>
                        </div>
                        <p className="text-sm font-semibold text-gray-500">
                            {initialValue}
                        </p>
                    </div>
                    <Button
                        variant="destructive"
                        className=" flex w-1/2 mt-4 items-center justify-center"
                        onClick={handleDeleteWorkspace}
                    >
                        <TrashIcon className="size-5" />
                        <p>
                            Delete Workspace
                        </p>
                    </Button>

                </div>
            </DialogContent>
        </Dialog>
    )
}