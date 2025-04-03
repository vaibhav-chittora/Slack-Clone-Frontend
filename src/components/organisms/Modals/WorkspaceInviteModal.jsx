import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useResetWorkspaceJoinCode } from "@/hooks/apis/workspaces/useResetWorkspaceJoinCode"
import { useToast } from "@/hooks/use-toast"
import { CopyIcon, RefreshCcwIcon } from "lucide-react"
import { Link } from "react-router-dom"

export const WorkspaceInviteModal = ({ workspaceName, joinCode, openInviteModal, setOpenInviteModal, workspaceId }) => {
    const { toast } = useToast()

    const { resetWorkspaceJoinCodeMutation } = useResetWorkspaceJoinCode(workspaceId)


    async function handleCopy() {
        const inviteLink = `${joinCode}`

        await navigator.clipboard.writeText(inviteLink);
        toast({
            title: "Copied to clipboard",
            description: "Invite link copied to clipboard",
        })
    }

    async function handleResetJoinCode() {
        try {
            await resetWorkspaceJoinCodeMutation()
            toast({
                title: "Join code reset",
                description: "Join code reset successfully",
            })
        } catch (error) {
            console.log("Error in resetting join code - ", error);
            toast({
                title: "Error resetting join code",
                description: "Something went wrong while resetting join code",
            })

        }
    }


    return (
        <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Invite People to Your "{workspaceName.toUpperCase()}" Workspace
                    </DialogTitle>
                    <DialogDescription>
                        Use the code below to invite people to your workspace.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col items-center justify-center py-4 gap-y-4">
                    <p className="text-4xl font-bold Uppercase">
                        {joinCode}
                    </p>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                    >
                        Copy Code
                        <CopyIcon className="size-4 ml-2" />
                    </Button>

                    {/* Link to redirect the user in a new tab to the join page */}
                    <Link
                        to={`/workspaces/join/${workspaceId}`}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                    >
                        Redirect to join page
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center w-full">

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleResetJoinCode}
                    >
                        Reset Join Code
                        <RefreshCcwIcon className="size-4 ml-2" />
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    )
}