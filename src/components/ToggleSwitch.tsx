import React from 'react';
import { ReactComponent as ChangeIcon } from '../asset/svg/change-icon.svg';

interface ToggleSwitchProps {
  onChange: (value: any) => void;
  value?: boolean;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  onChange,
  value,
}) => {
  return (
    <>
      <div className="pr-4">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          {/* <!— toggle —> */}
          <div className="relative">
            {/* <!— input —> */}
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              checked={value}
              onChange={(e) => onChange(!value)}
            ></input>
            {/* <!— line —> */}
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            {/* <!— dot —> */}
            <div
              className={`dot absolute ${
                value ? 'right-1' : 'left-1'
              } top-1 bg-white w-6 h-6 rounded-full transition`}
            ></div>
          </div>
        </label>
      </div>
    </>
  );
};

