import React, { FC } from 'react';

interface BottomFixedViewProps {
  backgroundColor?: 'bg-white' | 'bg-gray-100' | 'bg-gray-200';
}

export const BottomFixedView: FC<BottomFixedViewProps> = ({
  children,
  backgroundColor = 'bg-white',
}) => {
  return (
    <div className={`fixed bottom-0 w-full max-w-inherit ${backgroundColor}`}>
      {children}
    </div>
  );
};
