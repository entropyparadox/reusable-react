import React, { ButtonHTMLAttributes, FC, SVGProps } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface BottomNavbarItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FC<SVGProps<SVGSVGElement>>;
  label?: string;
  active: boolean;
  tw?: TWProperties;
  twIcon?: TWProperties;
  twLabel?: TWProperties;
}

export const BottomNavbarItem: FC<BottomNavbarItemProps> = ({
  icon: Icon,
  label,
  active,
  tw = {},
  twIcon = {},
  twLabel = {},
  ...props
}) => {
  const defaultTW = new TW({
    alignItems: 'items-center',
    display: 'flex',
    flex: 'flex-1',
    flexDirection: 'flex-col',
    height: 'h-12',
    outline: 'outline-none',
    focus: {
      outline: 'outline-none',
      ring: 'ring-0',
    },
  }).merge(tw);

  const iconTW = new TW({
    color: 'text-gray-300',
    fill: 'fill-current',
  }).merge(twIcon);

  const labelTW = new TW({
    color: 'text-gray-500',
    fontSize: 'text-xs',
    fontWeight: 'font-medium',
  }).merge(twLabel);

  return (
    <button className={defaultTW.toClassName()} {...props}>
      <Icon className={iconTW.toClassName()} />
      {label ?? <span className={labelTW.toClassName()}>{label}</span>}
    </button>
  );
};
