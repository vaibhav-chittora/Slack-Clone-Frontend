import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useAddChannelToWorkspace } from "@/hooks/apis/workspaces/useAddChannelToWorkspace"
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal"
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace"
import { useToast } from "@/hooks/use-toast"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export const CreateChannelModal = () => {

    const { queryClient } = useQueryClient()
    const { toast } = useToast()
    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal()

    const [channelName, setChannelName] = useState("")

    const { addChannelToWorkspaceMutation } = useAddChannelToWorkspace()

    const { currentWorkspace } = useCurrentWorkspace()


    function handleClose() {
        setOpenCreateChannelModal(false)
    }

    async function handleFormSubmit(e) {
        e.preventDefault()
        await addChannelToWorkspaceMutation({
            workspaceId: currentWorkspace?._id,
            channelName
        });

        toast({
            title: "Channel created successfully",
            description: "Your channel has been created",
            variant: "default"
        })

        queryClient.invalidateQueries(`fetchWorkspaceByID-${currentWorkspace?._id}`);
        setOpenCreateChannelModal(false)
        // close the modal
    }

    return (
        <Dialog open={openCreateChannelModal} onOpenChange={handleClose}>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create a new channel
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit}>
                    <Input
                        value={channelName}
                        onChange={(e) => setChannelName(e.target.value)}
                        minLength={3}
                        placeholder='Channel name e.g. Team Meetings'
                        required
                    />

                    <div className="flex justify-end mt-4">
                        <Button>
                            Create channel
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );

};