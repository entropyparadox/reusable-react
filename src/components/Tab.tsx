import React, { ButtonHTMLAttributes, FC } from 'react';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  full?: boolean;
  theme?: 'brand-1' | 'brand-2';
  active: boolean;
}

export const Tab: FC<TabProps> = ({
  text,
  full = false,
  theme = 'brand-1',
  active,
  ...props
}) => {
  const flex = full ? 'flex-1' : '';
  const padding = full ? '' : 'px-2';
  const border = active ? 'border-b-2' : '';
  const bold = active ? 'font-bold' : '';
  const textColor = active ? `text-${theme}` : 'text-gray-500';

  return (
    <button
      {...props}
      className={`${flex} flex justify-center items-end ${padding}`}
    >
      <span
        className={`flex items-center px-2 h-10 ${border} border-${theme}
                    ${bold} text-sm ${textColor}`}
      >
        {text}
      </span>
    </button>
  );
};
