import Avatar from "react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { PlusIcon } from "lucide-react";

import { APP_SIDEBAR } from "@/constants";
export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative">
          <Avatar src={APP_SIDEBAR.curProfile.src} size="32px" round="8px" />
          <div className="absolute bottom-0 right-0 size-2 rounded-full bg-emerald-500 dark:bg-emarald-400 ring-sidebar ring-1"></div>
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
