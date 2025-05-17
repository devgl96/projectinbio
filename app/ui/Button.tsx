import { cn } from "@/app/lib/utils";

export default function Button({
  children,
  variant = "primary",
  ...rest
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={cn(
        "p-3 text-white rounded-xl font-bold whitespace-nowrap hover:cursor-pointer hover:opacity-95 disabled:opacity-70",
        variant === "primary" && "bg-accent-purple",
        variant === "secondary" && "bg-background-tertiary",
        variant === "ghost" && "border-border-primary",
        rest.className
      )}
    >
      {children}
    </button>
  );
}
