import React, {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
} from 'react';
import { TW, TWProperties } from '../tailwind/tw';

export interface FlexWrapProps extends HTMLAttributes<HTMLDivElement> {
  tw?: TWProperties;
}

export const FlexWrap: FC<FlexWrapProps> = ({ children, tw = {} }) => {
  const defaultTW = new TW({
    display: 'flex',
    flexWrap: 'flex-wrap',
    margin: '-m-1',
  }).merge(tw);

  return (
    <div className={defaultTW.toClassName()}>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { style: { margin: '0.25rem' } });
        }
        return child;
      })}
    </div>
  );
};
