import React, { FC } from 'react';

interface TabsProps {
  full?: boolean;
  large?: boolean;
}

export const Tabs: FC<TabsProps> = ({
  children,
  full = false,
  large = false,
}) => {
  const padding = full ? '' : 'px-3';
  const height = large ? 'h-16' : 'h-10';

  return <nav className={`flex ${padding} ${height} border-b`}>{children}</nav>;
};
