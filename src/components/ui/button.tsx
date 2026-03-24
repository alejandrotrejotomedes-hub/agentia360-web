import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const variantClasses: Record<string, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    outline:
      "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizeClasses: Record<string, string> = {
    default: "h-9 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-10 px-8 text-sm",
    icon: "h-9 w-9",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}

export { Button };
