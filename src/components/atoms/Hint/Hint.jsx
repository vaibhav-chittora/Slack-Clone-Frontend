import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import React from 'react'

function Hint({ children, label, side, align }) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>

                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    side={side}
                    align={align}
                    className='bg-black text-white p-2 rounded-lg border border-white/5'
                >
                    <p className='text-s font-medium'>
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider >
    )
}

export default Hint