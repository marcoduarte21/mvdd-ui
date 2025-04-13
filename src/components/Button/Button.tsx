// src/components/Button.tsx
import React from 'react';
import './Button.styles.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  children
}) => {
  return (
    <button 
      className={`my-button ${variant} ${size}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};