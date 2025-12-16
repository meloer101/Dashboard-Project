import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { useTheme } from "@/components/ThemeProvider";

import { MoonIcon, SunIcon, MonitorIcon, CheckIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme">
            <SunIcon className='scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'/>
            <MoonIcon className=' absolute scale-0 rotate-90 transition-all dark:scale-100 dark:-rotate-0'/>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
