import { SidebarItem } from "@/components/atoms/SidebarItem/SidebarItem"
import { WorkspacePanelHeader } from "@/components/molecules/workspace/WorkspacePanelHeader"
import { WorkspacePanelSection } from "@/components/molecules/workspace/WorkspacePanelSection"
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById"
import { AlertTriangleIcon, HashIcon, Loader, MessageSquareTextIcon, SendHorizontal } from "lucide-react"
import { useParams } from "react-router-dom"
import { RiDraftLine } from 'react-icons/ri'
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal"
import { UserItem } from "@/components/atoms/UserItem/UserItem"

export const WorkspacePanel = () => {

    const { workspaceId } = useParams()
    const { workspace, isFetching, isSuccess } = useGetWorkspaceById(workspaceId);

    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal()

    if (isFetching) {
        return (
            <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
                <Loader className="animate-spin size-6 text-white" />
            </div>
        )
    }

    if (!isSuccess) {
        return (
            <div className="flex flex-col gap-y-2 h-full items-center justify-center text-white">
                <AlertTriangleIcon className=" size-6 text-white" />
                Something went wrong
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full bg-slack-medium">
            <WorkspacePanelHeader workspace={workspace} />

            <div className="flex flex-col px-2 mt-2">

                <SidebarItem
                    label="Threads"
                    icon={MessageSquareTextIcon}
                    id="threads"
                    variant="active"
                />

                <SidebarItem
                    label="Drafts"
                    icon={RiDraftLine}
                    id="drafts"
                    variant="default"
                />

                <SidebarItem
                    label="Sends"
                    icon={SendHorizontal}
                    id="sends"
                    variant="default"
                />

            </div>


            <WorkspacePanelSection
                label={"Channels"}
                onIconClick={() => { setOpenCreateChannelModal(true) }}

            >
                {workspace?.channels?.map((channel) => {
                    return <SidebarItem key={channel._id} label={channel?.name} icon={HashIcon} variant="default" id={channel._id} />
                })}
            </WorkspacePanelSection>

            <WorkspacePanelSection
                label={"Members"}
                onIconClick={() => { }}
            >
                {workspace?.members?.map((item) => {
                    return <UserItem
                        key={item._id}
                        image={item?.memberId?.avatar}
                        label={item.username}
                        id={item._id}
                    />
                })}
            </WorkspacePanelSection>

        </div>
    )
}