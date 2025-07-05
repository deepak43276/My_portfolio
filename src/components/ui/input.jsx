"use client";

export function Input(props) {
  return (
    <input 
      className="flex h-12 w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 text-base leading-relaxed" 
      {...props} 
    />
  );
} 