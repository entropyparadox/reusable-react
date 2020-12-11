import React, { FC } from 'react';

export const HorizontalScrollView: FC = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block">
        <ul className="flex items-center space-x-2 mx-5">{children}</ul>
      </div>
    </div>
  );
};
