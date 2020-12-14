import React, { ButtonHTMLAttributes, FC, SVGProps } from 'react';

interface BottomNavbarItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  color?: 'brand-1' | 'brand-2';
  active: boolean;
}

export const BottomNavbarItem: FC<BottomNavbarItemProps> = ({
  icon: Icon,
  label,
  color = 'brand-1',
  active,
  ...props
}) => {
  const textColor = active ? `text-${color}` : 'text-gray-500';
  const iconColor = active ? `text-${color}` : 'text-gray-300';

  return (
    <button className="flex-1 flex flex-col items-center h-12" {...props}>
      <Icon className={`fill-current ${iconColor}`} />
      <span className={`font-medium text-2xs ${textColor}`}>{label}</span>
    </button>
  );
};
