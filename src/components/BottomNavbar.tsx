import React, { FC } from 'react';

export const BottomNavbar: FC = ({ children }) => {
  return (
    <nav className="fixed bottom-0 flex w-full h-12 border-t bg-white">
      {children}
    </nav>
  );
};
