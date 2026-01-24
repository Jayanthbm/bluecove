import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20',
  secondary:
    'bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-900/20',
  outline: 'border-2 border-white text-white hover:bg-white/10',
  ghost: 'text-blue-600 hover:bg-blue-50',
  dark: 'bg-slate-900 text-white hover:bg-slate-800',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const classes = `
    inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer
    ${variants[variant]} 
    ${sizes[size]} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
