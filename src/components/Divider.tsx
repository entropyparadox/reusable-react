import React, { FC } from 'react';

interface DividerProps {
  margin?: 'mx-0' | 'mx-5';
  height?: 'h-px' | 'h-3';
}

export const Divider: FC<DividerProps> = ({
  margin = 'mx-0',
  height = 'h-px',
}) => {
  return <hr className={`${margin} ${height} border-0 bg-gray-100`} />;
};
