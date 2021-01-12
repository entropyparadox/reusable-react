import React, { FC } from 'react';

interface HorizontalScrollViewProps {
  marginY?: 'my-0' | 'my-4';
}

export const HorizontalScrollView: FC<HorizontalScrollViewProps> = ({
  children,
  marginY = 'my-0',
}) => {
  return (
    <div
      className={`${marginY} overflow-x-auto`}
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      <div className="inline-block">
        <ul className="flex items-center space-x-2 mx-5">{children}</ul>
      </div>
    </div>
  );
};
