"use client";
import { Plus } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";
import { useModel } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";

export const NavigationAction = () => {
    const { onOpen } = useModel();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Return null or a placeholder until the component has hydrated
    }

    return (
        <div>
            <ActionTooltip side="right" align="center" label="Add to server">
                <button onClick={() => onOpen("createServer")} className="group flex items-center">
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
                        <Plus className="group-hover:text-white transition text-emerald-500" size={25}></Plus>
                    </div>
                </button>
            </ActionTooltip>
        </div>
    );
};
