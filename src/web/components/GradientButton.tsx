import React from 'react';
import { Button, ButtonProps } from './ui/button';
import { cn } from '@/infrastructure/lib/utils';

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button 
      className={cn(
        "bg-minkea-gradient hover:opacity-90 transition-all text-white font-black py-7 rounded-2xl shadow-xl shadow-primary/20", 
        className
      )} 
      {...props}
    >
      {children}
    </Button>
  );
};
