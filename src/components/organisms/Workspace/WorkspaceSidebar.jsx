import { UserButton } from "@/components/atoms/UserButton/UserButton"
import { SidebarButton } from "@/components/molecules/SidebarButton/SidebarButton"
import { BellIcon, HomeIcon, MessageSquareCodeIcon, MessageSquareIcon, MoreHorizontalIcon } from "lucide-react"

export const WorkspaceSidebar = () => {
    return (
        <>
            <aside className="w-[70px] h-full bg-slack-dark flex flex-col items-center gap-4 pt-10 pb-5">

                <SidebarButton Icon={HomeIcon} label={"Home"} />
                <SidebarButton Icon={MessageSquareIcon} label={"Messages"} />
                <SidebarButton Icon={BellIcon} label={"Notifications"} />
                <SidebarButton Icon={MoreHorizontalIcon} label={"More"} />


                <div className="flex flex-col items-center justify-center  mt-auto gap-y-1">
                    <UserButton className="" />
                </div>
            </aside>
        </>
    )
}