import React, {
  ChangeEvent,
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
} from 'react';
import { useId } from 'react-id-generator';
import { Label } from './Label';
import { Radio } from './Radio';

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  flexDirection?: 'flex-col' | 'flex-row';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  label,
  flexDirection = 'flex-col',
  onChange,
  ...props
}) => {
  const [name] = useId(1, 'radiogroup');

  return (
    <div {...props}>
      {label && <Label text={label} />}
      <div className={`flex ${flexDirection}`}>
        {Children.map(children, (child) => {
          if (isValidElement(child) && child.type === Radio) {
            return cloneElement(child, { name, onChange });
          }
          return child;
        })}
      </div>
    </div>
  );
};
