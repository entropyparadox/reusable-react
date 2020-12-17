import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import { Label } from './Label';
import { TextField } from './TextField';

interface PhoneNumberFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PhoneNumberField: FC<PhoneNumberFieldProps> = ({
  label,
  value,
  onChange,
  ...props
}) => {
  const matched = value.match(
    /([0-9]{3}|[0-9]{2})([0-9]{4}|[0-9]{3})([0-9]{4})/
  );
  const [number1, setNumber1] = useState(matched?.[1] ?? '');
  const [number2, setNumber2] = useState(matched?.[2] ?? '');
  const [number3, setNumber3] = useState(matched?.[3] ?? '');

  return (
    <div>
      {label && <Label text={label} />}
      <div className="flex space-x-3.5">
        <TextField
          {...props}
          type="tel"
          pattern="[0-9]{3}"
          maxLength={3}
          placeholder="010"
          value={number1}
          onChange={(e) => {
            setNumber1(e.target.value);
            e.target.value = `${e.target.value}${number2}${number3}`;
            onChange(e);
          }}
        />
        <TextField
          {...props}
          type="tel"
          pattern="[0-9]{4}"
          maxLength={4}
          placeholder="0000"
          value={number2}
          onChange={(e) => {
            setNumber2(e.target.value);
            e.target.value = `${number1}${e.target.value}${number3}`;
            onChange(e);
          }}
        />
        <TextField
          {...props}
          type="tel"
          pattern="[0-9]{4}"
          maxLength={4}
          placeholder="0000"
          value={number3}
          onChange={(e) => {
            setNumber3(e.target.value);
            e.target.value = `${number1}${number2}${e.target.value}`;
            onChange(e);
          }}
        />
      </div>
    </div>
  );
};
