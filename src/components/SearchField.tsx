import React, { FC, InputHTMLAttributes, useRef } from 'react';
import { ReactComponent as SearchCloseIcon } from '../assets/images/icon-search-close.svg';
import { ReactComponent as SearchIcon } from '../assets/images/icon-search.svg';
import { TW, TWProperties } from '../tailwind/tw';
import { IconButton } from './IconButton';

interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
  tw?: TWProperties;
  twOuter?: TWProperties;
}

export const SearchField: FC<SearchFieldProps> = ({
  value,
  onSearch = () => {},
  tw = {},
  twOuter = {},
  ...props
}) => {
  const input = useRef<HTMLInputElement>(null);

  const defaultTW = new TW({
    flex: 'flex-1',
    fontSize: 'text-sm',
    placeholderColor: 'placeholder-gray-400',
    focus: {
      ring: 'ring-0',
    },
  }).merge(tw);

  const outerTW = new TW({
    alignItems: 'items-center',
    borderColor: 'border-gray-200',
    borderRadius: 'rounded-full',
    borderWidth: 'border',
    display: 'flex',
    height: 'h-10',
    paddingX: 'px-4',
    width: 'w-full',
    focusWithin: {
      borderColor: 'border-brand-1',
    },
  }).merge(twOuter);

  return (
    <form
      className={outerTW.toClassName()}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div className="flex justify-center items-center -ml-2 w-10 h-10">
        <SearchIcon />
      </div>
      <input
        ref={input}
        className={defaultTW.toClassName()}
        value={value}
        {...props}
      />
      {value && (
        <div className="flex justify-center items-center -mr-2 w-10 h-10">
          <SearchCloseIcon
            onClick={() => {
              Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                'value',
              )?.set?.call(input.current, '');
              input.current?.dispatchEvent(
                new Event('change', { bubbles: true }),
              );
            }}
          />
        </div>
      )}
    </form>
  );
};
