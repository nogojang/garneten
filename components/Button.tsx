import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-garnet text-white hover:bg-garnet-light hover:shadow-lg border border-transparent",
    outline: "bg-transparent text-garnet border-2 border-garnet hover:bg-garnet hover:text-white",
    white: "bg-white text-garnet hover:bg-gray-100 hover:shadow-lg border border-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};