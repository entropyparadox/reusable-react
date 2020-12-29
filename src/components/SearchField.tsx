import React, { FC, InputHTMLAttributes } from 'react';
import { ReactComponent as SearchIcon } from '../assets/images/icon-search.svg';

interface SearchFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchField: FC<SearchFieldProps> = ({ ...props }) => {
  return (
    <div className="flex items-center border border-gray-200 focus-within:border-brand-1 rounded-lg px-4 py-2 ps:py-3">
      <SearchIcon />
      <input
        className="block px-4 w-full text-sm ps:text-base focus:ring-0 placeholder-gray-400"
        {...props}
      />
    </div>
  );
};
