"use client";  // 👈 required in App Router

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  // prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg w-full max-w-lg p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}
