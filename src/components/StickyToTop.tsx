import React, { FC } from 'react';

export const StickyToTop: FC = ({ children }) => {
  return <div className="sticky top-fixed-top z-50 bg-white">{children}</div>;
};
