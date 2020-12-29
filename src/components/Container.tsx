import React, { FC } from 'react';

export const Container: FC = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
};
