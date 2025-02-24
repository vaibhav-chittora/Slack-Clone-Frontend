import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/hooks/context/useAuth"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOutIcon, LucideLoader2, Pencil, PencilIcon, PlusSquareIcon, SettingsIcon, User2Icon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/use-toast"
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal"

export const UserButton = () => {
    const { auth, Logout } = useAuth()
    const navigate = useNavigate()
    const { toast } = useToast()

    const handleLogout = async () => {


        await Logout()
        toast({
            title: 'Successfully Logged Out, redirecting you to the signin page',
            type: 'success',
        })


        setTimeout(() => {
            // navigate the user to the signin page
            navigate('/auth/signin')
        }, 3000);
    }

    const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal()


    function openCreateWorkspaceModal() {
        setOpenCreateWorkspaceModal(true)
    }


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
                <DropdownMenuItem onClick={openCreateWorkspaceModal}>
                    <PlusSquareIcon className="size-4 mr-2 h-10 w-10" />
                    Create Workspace
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <User2Icon className="size-4 mr-2 h-10 w-10" />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className="size-4 mr-2 h-10 w-10" />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={handleLogout}
                >
                    <LogOutIcon className="size-4 mr-2 h-10 w-10" />
                    Logout
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}