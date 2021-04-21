import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface TabsProps extends HTMLAttributes<HTMLElement> {
  sticky?: boolean;
  tw?: TWProperties;
}

export const Tabs: FC<TabsProps> = ({
  children,
  sticky = false,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    backgroundColor: 'bg-white',
    borderWidth: 'border-b',
    display: 'flex',
    height: 'h-10',
    overflowX: 'overflow-x-auto',
    padding: 'p-0',
    position: sticky ? 'sticky' : undefined,
    top: sticky ? 'top-fixed-top' : undefined,
    zIndex: sticky ? 'z-50' : undefined,
  }).merge(tw);

  return (
    <nav
      className={defaultTW.toClassName()}
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      {...props}
    >
      {children}
    </nav>
  );
};
