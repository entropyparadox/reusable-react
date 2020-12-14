import React, { ButtonHTMLAttributes, FC, SVGProps } from 'react';

interface TopNavbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FC<SVGProps<SVGSVGElement>>;
}

export const TopNavbarButton: FC<TopNavbarButtonProps> = ({
  icon: Icon,
  ...props
}) => {
  return (
    <button className="w-10 h-10" {...props}>
      <Icon className="m-auto" />
    </button>
  );
};
