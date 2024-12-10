import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
}

export function Button({ type = 'button', children, icon: Icon, onClick }: ButtonProps) {
  return (
    <button type={type} className="form-button" onClick={onClick}>
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {children}
    </button>
  );
}