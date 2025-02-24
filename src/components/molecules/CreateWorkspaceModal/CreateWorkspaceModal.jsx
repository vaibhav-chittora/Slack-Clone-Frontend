import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCreateWorkspace } from "@/hooks/apis/workspaces/useCreateWorkspace"
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const CreateWorkspaceModal = () => {
    const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal()
    const [workspaceName, setWorkspaceName] = useState("")

    const navigate = useNavigate()
    const { isPending, isSuccess, createWorkspaceMutation } = useCreateWorkspace()

    async function handleFormSubmit(e) {
        e.preventDefault()

        try {
            const data = await createWorkspaceMutation({ name: workspaceName })
            console.log("Create the workspace with the data", data);
            navigate(`/workspace/${data._id}`)
        } catch (error) {
            console.log('Not able to create a workspace', error);
        } finally {
            setWorkspaceName("")
            setOpenCreateWorkspaceModal(false)
        }
    }



    function handleClose() {
        setOpenCreateWorkspaceModal(false)
    }

    return (
        <Dialog
            open={openCreateWorkspaceModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a new workspace
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit} >
                    <Input
                        required
                        minlength={3}
                        placeholder="Put the workspace name e.g - My Workspace, Dev Workspace, etc."
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        disabled={isPending}
                    />

                    <div className="flex justify-end mt-5">
                        <Button
                            disabled={isPending}
                        >
                            Create Workspace
                        </Button>
                    </div>
                </form>

            </DialogContent>



        </Dialog>
    )

}