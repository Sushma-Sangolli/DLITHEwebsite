// src/components/ui/accordion.js
import React from "react";

// Main Accordion wrapper
export const Accordion = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

// Accordion Item
export const AccordionItem = ({ children, value, className }) => {
  return <div className={className}>{children}</div>;
};

// Trigger button
export const AccordionTrigger = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-between items-center px-4 py-3 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 ${className}`}
    >
      {children}
    </button>
  );
};

// Accordion content
export const AccordionContent = ({ children, className }) => {
  return <div className={`px-4 py-2 ${className}`}>{children}</div>;
};
