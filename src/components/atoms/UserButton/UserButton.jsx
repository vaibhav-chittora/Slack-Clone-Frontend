import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/context/useAuth"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOutIcon, Settings2Icon, SettingsIcon, User2Icon } from "lucide-react"

export const UserButton = () => {
    const { auth } = useAuth()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none relative">

                <Avatar className='size-10 hover:opacity-65 transition-all'>
                    <AvatarImage src={auth?.user?.avatar} />
                    <AvatarFallback>

                        {auth?.user?.username[0].toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <User2Icon className="size-4 mr-2 h-10 w-10" />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className="size-4 mr-2 h-10 w-10" />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogOutIcon className="size-4 mr-2 h-10 w-10" />
                    Logout
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}