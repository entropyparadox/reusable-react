import React, { FC } from 'react';

export const List: FC = ({ children }) => {
  return <ul className="flex flex-col">{children}</ul>;
};
