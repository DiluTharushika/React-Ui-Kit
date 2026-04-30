import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  const baseStyles =
    "px-4 py-2 rounded font-medium border transition-colors cursor-pointer";

  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100";

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...rest}>
      {children}
    </button>
  );
};