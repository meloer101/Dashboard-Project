import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

import { Logo } from "@/components/Logo";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex justify-between gap-1 items-center py-3 ps-4 pe-2 border-b lg:hidden ">
      <div className="ml-auto">
        <Logo />
      </div>
      <Logo />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        aria-label="Togle mobile menu"
      >
        <MenuIcon />
      </Button>
    </header>
  );
};
