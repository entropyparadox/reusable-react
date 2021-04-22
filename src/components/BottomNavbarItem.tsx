import React, { ButtonHTMLAttributes, FC, SVGProps } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface BottomNavbarItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FC<SVGProps<SVGSVGElement>>;
  label?: string;
  active?: boolean;
  tw?: TWProperties;
  twActive?: TWProperties;
  twIcon?: TWProperties;
  twIconActive?: TWProperties;
  twLabel?: TWProperties;
  twLabelActive?: TWProperties;
}

export const BottomNavbarItem: FC<BottomNavbarItemProps> = ({
  icon: Icon,
  label,
  active = false,
  tw = {},
  twActive = {},
  twIcon = {},
  twIconActive = {},
  twLabel = {},
  twLabelActive = {},
  ...props
}) => {
  const defaultTW = new TW({
    alignItems: 'items-center',
    display: 'flex',
    flex: 'flex-1',
    flexDirection: 'flex-col',
    height: 'h-12',
    justifyContent: 'justify-center',
    outline: 'outline-none',
    focus: {
      outline: 'outline-none',
      ring: 'ring-0',
    },
  }).merge(tw);

  const activeTW = new TW(defaultTW).merge(twActive);

  const iconTW = new TW({
    color: 'text-gray-300',
    fill: 'fill-current',
  }).merge(twIcon);

  const activeIconTW = new TW(iconTW)
    .merge({ color: 'text-brand-1' })
    .merge(twIconActive);

  const labelTW = new TW({
    color: 'text-gray-500',
    fontSize: 'text-xs',
    fontWeight: 'font-medium',
  }).merge(twLabel);

  const activeLabelTW = new TW(labelTW)
    .merge({ color: 'text-brand-1' })
    .merge(twLabelActive);

  return (
    <button
      className={active ? activeTW.toClassName() : defaultTW.toClassName()}
      {...props}
    >
      <Icon
        className={active ? activeIconTW.toClassName() : iconTW.toClassName()}
      />
      {label && (
        <span
          className={
            active ? activeLabelTW.toClassName() : labelTW.toClassName()
          }
        >
          {label}
        </span>
      )}
    </button>
  );
};
