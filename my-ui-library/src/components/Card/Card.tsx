import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {title && (
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
};