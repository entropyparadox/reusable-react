import React, { FC, SVGProps } from 'react';

interface TopNavbarButtonProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

export const TopNavbarButton: FC<TopNavbarButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button className="w-10 h-10" onClick={onClick}>
      <Icon className="m-auto" />
    </button>
  );
};
