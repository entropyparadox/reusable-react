import React, { Children, cloneElement, FC, isValidElement } from 'react';

export const FlexWrap: FC = ({ children }) => {
  return (
    <div className="flex flex-wrap -m-1">
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { style: { margin: '0.25rem' } });
        }
        return child;
      })}
    </div>
  );
};
