import React, { FC } from 'react';

interface HorizontalScrollViewProps {
  marginX?: 'mx-0' | '-mx-5';
  marginY?: 'my-0' | 'my-4';
}

export const HorizontalScrollView: FC<HorizontalScrollViewProps> = ({
  children,
  marginX = 'mx-0',
  marginY = 'my-0',
}) => {
  return (
    <div
      className={`${marginX} ${marginY} overflow-x-auto`}
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      <div className="inline-block">
        <ul className="flex items-center space-x-2 mx-5">{children}</ul>
      </div>
    </div>
  );
};
