import React, {
  ChangeEvent,
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
} from 'react';
import { useId } from 'react-id-generator';
import { Radio } from './Radio';

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  onChange,
  ...props
}) => {
  const [name] = useId(1, 'radiogroup');

  return (
    <div {...props}>
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === Radio) {
          return cloneElement(child, { name, onChange });
        }
        return child;
      })}
    </div>
  );
};
