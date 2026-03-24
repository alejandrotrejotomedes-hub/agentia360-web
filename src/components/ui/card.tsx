import * as React from "react";

function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border border-border bg-card text-card-foreground shadow ${className}`}
      {...props}
    />
  );
}

export { Card };
