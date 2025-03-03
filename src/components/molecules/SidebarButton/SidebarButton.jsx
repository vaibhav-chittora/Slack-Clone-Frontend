import { Button } from "@/components/ui/button"

export const SidebarButton = ({ Icon, label }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-0.5 cursor-pointer">
            <Button
                variant="ghost"
                className="size-9 p-2 group-hover:bg-accent/20"
            >
                <Icon className="size-5 text-white group-hover:scale-110 transition-all duration-300" />
                <span className="text-white text-[10px] group-hover:text-accent">

                    {label}
                </span>

            </Button>
        </div>
    )
}