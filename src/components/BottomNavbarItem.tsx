import React, { FC, SVGProps } from 'react';

interface BottomNavbarItemProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  color?: 'brand-1' | 'brand-2';
  active: boolean;
  onClick: () => void;
}

export const BottomNavbarItem: FC<BottomNavbarItemProps> = ({
  icon: Icon,
  label,
  color = 'brand-1',
  active,
  onClick,
}) => {
  const textColor = active ? `text-${color}` : 'text-gray-500';
  const iconColor = active ? `text-${color}` : 'text-gray-300';

  return (
    <button
      className="flex-1 flex flex-col items-center h-12"
      onClick={onClick}
    >
      <Icon className={`fill-current ${iconColor}`} />
      <span className={`font-medium text-2xs ${textColor}`}>{label}</span>
    </button>
  );
};
