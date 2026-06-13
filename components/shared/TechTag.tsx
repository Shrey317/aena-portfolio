import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TechTagProps {
  children: ReactNode;
  /** Slightly larger variant for filter buttons */
  size?: "sm" | "md";
  /** Active / selected state (for filter bar) */
  active?: boolean;
  /** Optional click handler for filter use */
  onClick?: () => void;
}

export default function TechTag({
  children,
  size = "sm",
  active = false,
  onClick,
}: TechTagProps) {
  const base =
    "inline-flex items-center font-medium rounded-md border transition-colors";

  const sizeClass =
    size === "sm"
      ? "px-2.5 py-1 text-xs"
      : "px-3 py-1.5 text-sm";

  const colorClass = active
    ? "bg-violet-600 border-violet-600 text-white"
    : "bg-violet-500/10 border-violet-500/20 text-violet-400 hover:bg-violet-500/20";

  if (onClick) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={cn(base, sizeClass, colorClass, "cursor-pointer")}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={cn(base, sizeClass, colorClass)}>{children}</span>
  );
}
