import React, { FC, InputHTMLAttributes, useRef } from 'react';
import { ReactComponent as SearchCloseIcon } from '../assets/images/icon-search-close.svg';
import { ReactComponent as SearchIcon } from '../assets/images/icon-search.svg';
import { IconButton } from './IconButton';

interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void;
}

export const SearchField: FC<SearchFieldProps> = ({
  onSearch = () => {},
  value,
  onChange,
  ...props
}) => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex items-center px-4 w-full h-10
                 rounded-full border border-gray-200 focus-within:border-brand-1"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input
        {...props}
        ref={input}
        className="flex-1 text-sm outline-none focus:outline-none focus:ring-0 placeholder-gray-400"
        value={value}
        onChange={onChange}
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
