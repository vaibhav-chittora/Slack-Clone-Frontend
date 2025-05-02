import { ChannelHeader } from "@/components/molecules/ChannelHeader/ChannelHeader"
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput"
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById"
import { Loader2, TriangleAlertIcon } from "lucide-react"
import { useParams } from "react-router-dom"

export const Channel = () => {
    const { channelId } = useParams()
    const { isFetching, isError, channelDetails } = useGetChannelById(channelId)

    if (isFetching) {
        return (
            <div className="h-full flex-1 flex items-center justify-center">
                <Loader2 className="animate-spin text-muted-foreground size-5" />
            </div>
        )
    }
    if (isError) {
        return (
            <div className="h-full flex-1 flex flex-col gap-y-2 items-center justify-center">
                <TriangleAlertIcon className="text-muted-foreground size-5" />
                <span className="text-sm text-muted-foreground">Channel Not Found</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full">
            <ChannelHeader name={channelDetails?.name} />

            <div className="flex-1" />
            <ChatInput />
        </div>
    )
}