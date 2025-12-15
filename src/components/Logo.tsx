// src/components/Logo.tsx
import logo from "./logo.png";

type LogoProps = {
  variant?: "default" | "icon";
};

export const Logo = ({ variant = "default" }: LogoProps) => {
  return (
    <img
      src={logo}
      alt="Logo"
      className={
        variant === "icon"
          ? "h-6 w-auto"
          : "h-6 w-6"
      }
    />
  );
};
