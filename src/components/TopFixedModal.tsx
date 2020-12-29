import React, { FC, ReactElement } from 'react';

interface TopFixedModalProps {
  isOpen: boolean;
  setClose: () => void;
  header?: ReactElement;
}

export const TopFixedModal: FC<TopFixedModalProps> = ({
  isOpen,
  setClose,
  header,
  children,
}) => {
  return (
    <div
      className={`${
        isOpen
          ? 'z-100 opacity-100 scale-100 duration-100 ease-in'
          : '-z-10 opacity-0 scale-95 duration-200 ease-out'
      } fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between mb-4">
            {header}
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setClose()}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
