import React, { FC } from 'react';

interface DividerProps {
  margin?: 'mx-5';
}

export const Divider: FC<DividerProps> = ({ margin }) => {
  return <hr className={`${margin} h-px border-0 bg-gray-100`} />;
};
