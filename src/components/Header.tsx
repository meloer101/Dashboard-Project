import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

import { Logo } from "@/components/Logo";
import { MenuIcon } from "lucide-react";

export const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="">
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
