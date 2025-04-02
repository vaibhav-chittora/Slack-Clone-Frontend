import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { useState } from "react"
import { FaCaretDown, FaCaretRight } from "react-icons/fa"

export const WorkspacePanelSection = ({ children, label, onIconClick }) => {
    const [open, setOpen] = useState(true)

    return (

        <div className="flex flex-col mt-3 px-2">
            <div className="flex items-center px-3.5 group">

                <Button
                    onClick={() => setOpen(!open)}
                    variant="transparent"
                    className="p-0.5 text-sm size-6 text-[#f9edffcc]"
                >
                    {open ? <FaCaretDown className="size-4" /> : <FaCaretRight className="size-4" />}
                </Button>

                <Button variant="transparent"
                    size="sm"
                    className="text-sm text-[#f9edffcc] group px-1.5 h-[30px] justify-start items-center overflow-hidden">
                    <span>
                        {label}
                    </span>

                </Button>
                {onIconClick && (
                    <Button
                        variant='transparent'
                        size='iconSm'
                        onClick={onIconClick}
                        className='group-hover:opacity-100 transition-opacity duration-200 ml-auto p-0.5 text-sm size-6 text-[#f9edffcc]'
                    >
                        <PlusIcon className="size-4 " />

                    </Button>
                )}
            </div>
            {open && children}

        </div>
    )
}