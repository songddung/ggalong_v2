import React from 'react';
import { Badge } from './ui/badge';

interface TechBadgeProps {
  tech: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech, icon, variant = 'secondary' }) => {
  return (
    <Badge 
      variant={variant} 
      className="flex items-center gap-2 px-3 py-1 text-sm hover:bg-primary/20 hover:border-primary/30 transition-colors duration-200"
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {tech}
    </Badge>
  );
};

export default TechBadge;