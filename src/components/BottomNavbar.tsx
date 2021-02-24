import React, { FC, HTMLAttributes } from 'react';

export const BottomNavbar: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  ...props
}) => {
  return (
    <nav
      {...props}
      className="fixed bottom-0 flex w-full h-fixed-bottom border-t bg-white"
    >
      {children}
    </nav>
  );
};
