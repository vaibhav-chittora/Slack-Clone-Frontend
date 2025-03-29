import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace"
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal"
import { useToast } from "@/hooks/use-toast"
import { useQueryClient } from "@tanstack/react-query"
import { TrashIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUpdateWorkspace } from "@/hooks/apis/workspaces/useUpdateWorkspace"

export const WorkspacePreferencesModal = () => {

    const queryClient = useQueryClient()
    const [workspaceId, setWorkspaceId] = useState(null);

    const [editOpen, setEditOpen] = useState(false);

    const navigate = useNavigate();
    const { toast } = useToast();



    const { initialValue, openPreferences, setOpenPreferences, workspace } = useWorkspacePreferencesModal();
    const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);

    const { isPending, updateWorkspaceMutation } = useUpdateWorkspace(workspaceId);

    const [renameValue, setRenameValue] = useState(workspace?.name);

    useEffect(() => {
        setWorkspaceId(workspace?._id)
        setRenameValue(workspace?.name)
    }, [workspace])

    async function handleDeleteWorkspace() {
        try {
            await deleteWorkspaceMutation();
            navigate("/home");
            queryClient.invalidateQueries(`fetchWorkspaceByID - ${workspace?._id}`);
            setOpenPreferences(false);
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

    async function handleFormSubmit(e) {
        e.preventDefault();
        try {
            await updateWorkspaceMutation(renameValue);
            queryClient.invalidateQueries(`fetchWorkspaceByID - ${workspace?._id}`);
            setOpenPreferences(false);
            toast({
                title: "Workspace updated successfully",
                type: "success",
            })
        } catch (error) {
            console.log("Error in updating workspace", error)
            toast({
                title: "Error in updating workspace",
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

                    <Dialog open={editOpen} onOpenChange={setEditOpen}>
                        <DialogTrigger>

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
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Rename Workspace
                                </DialogTitle>
                            </DialogHeader>
                            <form className="space-y-4 " onSubmit={handleFormSubmit} >
                                <Input
                                    value={renameValue}
                                    onChange={(e) => setRenameValue(e.target.value)}
                                    disabled={isPending}
                                    required
                                    autoFocus
                                    minLength={3}
                                    maxLength={50}
                                    placeholder="Workspace Name e.g. My Workspace"

                                />
                                <DialogFooter>
                                    <DialogClose >

                                        <Button
                                            variant="outline"
                                            disabled={isPending}
                                        >
                                            Cancel
                                        </Button>
                                    </DialogClose>

                                    <Button
                                        type="submit"
                                        disabled={isPending}
                                    >
                                        Save
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>

                    </Dialog>


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
        </Dialog >
    )
}