import React, { FC } from 'react';

interface TabsProps {
  padding?: 'p-0' | 'px-3';
  height?: 'h-10' | 'h-16' | 'h-20';
  borderless?: boolean;
}

export const Tabs: FC<TabsProps> = ({
  children,
  padding = 'p-0',
  height = 'h-10',
  borderless = false,
}) => {
  const border = borderless ? 'border-0' : 'border-b';

  return (
    <nav className={`flex ${padding} ${height} ${border}`}>{children}</nav>
  );
};
