import React from "react";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <input type="checkbox" {...rest} />
      {label && <span>{label}</span>}
    </label>
  );
};