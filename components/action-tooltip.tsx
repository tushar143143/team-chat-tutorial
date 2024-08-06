'use client'
import React, { useEffect, useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

interface ActionTooltipProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

export const ActionTooltip = ({
    label,
    children,
    side,
    align
}: ActionTooltipProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                {isClient && (
                    <TooltipContent side={side} align={align}>
                        <p className="font-semibold text-sm capitalize">
                            {label.toLowerCase()}
                        </p>
                    </TooltipContent>
                )}
            </Tooltip>
        </TooltipProvider>
    );
};
