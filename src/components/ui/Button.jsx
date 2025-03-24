import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg font-medium flex items-center transition group cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
