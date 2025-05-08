import { Editor } from "@/components/atoms/Editor/Editor"
import { useAuth } from "@/hooks/context/useAuth"
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace"
import { useSocket } from "@/hooks/context/useSocket"

export const ChatInput = () => {

    const { currentChannel, socket } = useSocket()
    const { auth } = useAuth()
    const { currentWorkspace } = useCurrentWorkspace()

    async function handleSubmit({ body }) {
        console.log(body)
        socket?.emit('newMessage', {
            channelId: currentChannel,
            body,
            senderId: auth?.user?._id,
            workspaceId: currentWorkspace?._id
        }, (data) => {
            console.log("Message sent successfully", data)
        }
        )
    }
    return (
        <div
            className="px-5 w-full "
        >
            <Editor
                placeholder="Type your message here..."
                variant="create"
                onSubmit={handleSubmit}
                onCancel={() => { }}
                disabled={false}
                defaultValue=""

            />
        </div>
    )
}