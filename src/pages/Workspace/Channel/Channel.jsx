import { ChannelHeader } from "@/components/molecules/ChannelHeader/ChannelHeader"
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput"
import { Message } from "@/components/molecules/Message/Message"
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById"
import { useGetChannelMessages } from "@/hooks/apis/channels/useGetChannelMessages"
import { useChannelMessages } from "@/hooks/context/useChannelMessages"
import { useSocket } from "@/hooks/context/useSocket"
import { useQueryClient } from "@tanstack/react-query"
import { Loader2, TriangleAlertIcon } from "lucide-react"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"

export const Channel = () => {
    const { channelId } = useParams()

    const queryClient = useQueryClient()

    const { isFetching, isError, channelDetails } = useGetChannelById(channelId)

    const { joinChannel } = useSocket()

    const { messages, isSuccess } = useGetChannelMessages(channelId)

    const { messageList, setMessageList } = useChannelMessages()

    const messageContainerListRef = useRef(null)


    // this useEffect is for joining the channel 
    useEffect(() => {
        if (!isFetching && !isError) {
            joinChannel(channelId)
        }

    }, [isFetching, isError, joinChannel, channelId])

    //this useEffect is to invalidate the query when channelId changes
    useEffect(() => {
        queryClient.invalidateQueries('getPaginatedMessages')
    }, [channelId])

    //use-effect to set message list when channel messages are fetched
    useEffect(() => {
        if (isSuccess) {
            console.log("Channel Messages Fetched", messages)
            setMessageList(messages)
        }

    }, [isSuccess, messages, setMessageList, channelId])

    // Scroll to the bottom of the message container when a new message is received
    useEffect(() => {
        if (messageContainerListRef.current) {
            messageContainerListRef.current.scrollTop = messageContainerListRef.current.scrollHeight
        }
    }, [messageList])

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


            <div ref={messageContainerListRef}
                className="flex-5 overflow-y-auto p-4 gap-y-2">
                {messageList?.map((message) => {
                    return <Message
                        className='scroll'
                        key={message._id}
                        body={message?.body}
                        authorImage={message?.senderId?.avatar}
                        authorName={message?.senderId?.username}
                        createdAt={message?.createdAt}
                    />
                })}
            </div>

            <div className="flex-1" />
            <ChatInput />
        </div>
    )
}