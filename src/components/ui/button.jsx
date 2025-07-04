"use client";

export function Button({ children, className = "", ...props }) {
  return (
    <button className={`px-4 py-2 rounded bg-primary text-primary-foreground transition ${className}`} {...props}>
      {children}
    </button>
  );
} 