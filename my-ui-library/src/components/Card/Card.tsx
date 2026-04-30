import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
        background: "white",
      }}
    >
      {title && (
        <div
          style={{
            fontWeight: 600,
            marginBottom: "0.5rem",
            fontSize: "1rem",
          }}
        >
          {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};