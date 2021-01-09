import React, { FC } from 'react';

interface TabsProps {
  sticky?: boolean;
  padding?: 'p-0' | 'px-3';
  height?: 'h-10' | 'h-16' | 'h-20';
  borderless?: boolean;
}

export const Tabs: FC<TabsProps> = ({
  children,
  sticky = false,
  padding = 'p-0',
  height = 'h-10',
  borderless = false,
}) => {
  const position = sticky ? 'sticky top-fixed-top z-50' : '';
  const border = borderless ? 'border-0' : 'border-b';

  return (
    <nav
      className={`${position} flex overflow-x-auto ${padding} ${height} ${border} bg-white`}
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      {children}
    </nav>
  );
};
