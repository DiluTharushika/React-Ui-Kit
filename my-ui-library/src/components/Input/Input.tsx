import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label style={{ display: "block", marginBottom: "0.25rem" }}>
          {label}
        </label>
      )}
      <input
        {...rest}
        style={{
          width: "100%",
          padding: "0.5rem 0.75rem",
          borderRadius: "4px",
          border: error ? "1px solid red" : "1px solid #ccc",
          outline: "none",
        }}
      />
      {error && (
        <div style={{ marginTop: "0.25rem", color: "red", fontSize: "0.8rem" }}>
          {error}
        </div>
      )}
    </div>
  );
};