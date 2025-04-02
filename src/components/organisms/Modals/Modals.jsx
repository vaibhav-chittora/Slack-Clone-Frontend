import { CreateChannelModal } from "@/components/molecules/CreateChannelModal/CreateChannelModal"
import { CreateWorkspaceModal } from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal"
import { WorkspacePreferencesModal } from "@/components/molecules/workspace/WorkspacePreferencesModal"

export const Modals = () => {
    return (
        <>
            <CreateWorkspaceModal />,
            <WorkspacePreferencesModal />
            <CreateChannelModal />
        </>
    )

}