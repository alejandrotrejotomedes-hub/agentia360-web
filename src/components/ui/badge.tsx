import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variantClasses =
    variant === "outline"
      ? "border border-current bg-transparent"
      : "border-transparent bg-primary text-primary-foreground";

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantClasses} ${className}`}
      {...props}
    />
  );
}

export { Badge };
