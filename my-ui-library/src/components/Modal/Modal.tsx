import React from "react";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          borderRadius: "8px",
          padding: "1.5rem",
          minWidth: "300px",
          maxWidth: "90%",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div
            style={{
              marginBottom: "1rem",
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            {title}
          </div>
        )}

        <div style={{ marginBottom: "1rem" }}>{children}</div>

        <div style={{ textAlign: "right" }}>
          <button
            onClick={onClose}
            style={{
              padding: "0.4rem 0.8rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: "#f5f5f5",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};