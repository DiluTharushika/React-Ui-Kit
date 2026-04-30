import React from "react";

type BadgeVariant = "neutral" | "success" | "warning" | "danger";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
}) => {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

  const variantClasses =
    variant === "success"
      ? "bg-emerald-100 text-emerald-800"
      : variant === "warning"
      ? "bg-amber-100 text-amber-800"
      : variant === "danger"
      ? "bg-red-100 text-red-800"
      : "bg-slate-100 text-slate-800";

  return <span className={`${base} ${variantClasses}`}>{children}</span>;
};