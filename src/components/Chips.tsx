import React, { FC } from 'react';

export const Chips: FC = ({ children }) => {
  return <div className="flex flex-wrap">{children}</div>;
};
