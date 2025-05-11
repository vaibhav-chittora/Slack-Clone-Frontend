import { ChannelHeader } from "@/components/molecules/ChannelHeader/ChannelHeader"
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput"
import { Message } from "@/components/molecules/Message/Message"
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById"
import { useGetChannelMessages } from "@/hooks/apis/channels/useGetChannelMessages"
import { useChannelMessages } from "@/hooks/context/useChannelMessages"
import { useSocket } from "@/hooks/context/useSocket"
import { useQueryClient } from "@tanstack/react-query"
import { Loader2, TriangleAlertIcon } from "lucide-react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const Channel = () => {
    const { channelId } = useParams()

    const queryClient = useQueryClient()

    const { isFetching, isError, channelDetails } = useGetChannelById(channelId)

    const { joinChannel } = useSocket()

    const { messages, isSuccess } = useGetChannelMessages(channelId)

    const { messageList, setMessageList } = useChannelMessages()

    useEffect(() => {
        if (!isFetching && !isError) {
            joinChannel(channelId)
        }

    }, [isFetching, isError, joinChannel, channelId])


    useEffect(() => {
        queryClient.invalidateQueries('getPaginatedMessages')
    }, [channelId])

    useEffect(() => {
        if (isSuccess) {
            console.log("Channel Messages Fetched", messages)
            setMessageList(messages)
        }

    }, [isSuccess, messages, setMessageList])

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

            {messageList?.map((message) => {
                return <Message
                    key={message._id}
                    body={message?.body}
                    authorImage={message?.senderId?.avatar}
                    authorName={message?.senderId?.username}
                    createdAt={message?.createdAt}
                />

            })}

            <div className="flex-1" />
            <ChatInput />
        </div>
    )
}