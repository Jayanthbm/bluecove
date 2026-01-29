import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30',
  secondary:
    'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/30',
  outline: 'border-2 border-white text-white hover:bg-white/10',
  'outline-blue': 'border-2 border-amber-500 text-amber-500 hover:bg-amber-50',
  ghost: 'text-amber-500 hover:bg-amber-50',
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
