import { cn } from "@/lib/utils";

import { Sidebar,SidebarContent,SidebarFooter,SidebarGroup,SidebarHeader,SidebarMenu, SidebarMenuItem} from "@/components/ui/sidebar";
import Avatar, { use } from "react";
import {Button} from "@/components/ui/button";

import {useSidebar} from "@/components/ui/sidebar";

import{ LogOutIcon } from 'lucide-react';
import {Logo} from "@/components/Logo";

import { APP_SIDEBAR } from "@/constants";  

export const AppSidebar = () => {
const { isMobile } = useSidebar()

  return (
    <Sidebar variant='floating' collapsible='icon'>
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <Logo variant={isMobile ? 'default':'icon'} />
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    </Sidebar>
  );
};
