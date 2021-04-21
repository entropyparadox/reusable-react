import React, {
  ChangeEvent,
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
} from 'react';
import { useId } from 'react-id-generator';
import { TW, TWProperties } from '../tailwind/tw';
import { Label } from './Label';
import { Radio } from './Radio';

interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  flexDirection?: 'flex-col' | 'flex-row';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  tw?: TWProperties;
  twLabel?: TWProperties;
  twOuter?: TWProperties;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  label,
  flexDirection = 'flex-col',
  onChange,
  tw = {},
  twLabel = {},
  twOuter = {},
  ...props
}) => {
  const [name] = useId(1, 'radiogroup');

  const defaultTW = new TW({
    display: 'flex',
    flexDirection: 'flex-col',
  }).merge(tw);

  const outerTW = new TW({}).merge(twOuter);

  return (
    <div className={outerTW.toClassName()}>
      {label && <Label text={label} tw={twLabel} />}
      <div className={defaultTW.toClassName()} {...props}>
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
