import React, { FC } from 'react';
import { AvatarIcon } from './icons';

interface AvatarProps {
  size?: 6 | 8 | 10 | 12 | 14;
  type?: 'circular' | 'rounded';
  src?: string;
  placeholder?: string;
  notification?: 'top' | 'bottom';
  notificationColor?: 'gray-300' | 'red-400' | 'green-400';
}

export const Avatar: FC<AvatarProps> = ({
  size = 8,
  type = 'circular',
  placeholder,
  src,
  notification,
  notificationColor = 'gray-300',
}) => {
  let widthheight = `w-${size} h-${size}`;
  let rounded = type === 'circular' ? 'rounded-full' : 'rounded-md';
  let backgroundColor = placeholder ? 'bg-gray-500' : 'bg-gray-100';

  let placeholderSize = 'text-xs';
  switch (size) {
    case 8:
      placeholderSize = 'text-sm';
      break;
    case 10:
      placeholderSize = 'text-base';
      break;
    case 12:
      placeholderSize = 'text-lg';
      break;
    case 14:
      placeholderSize = 'text-xl';
      break;
  }

  let innerElement = <></>;

  if (!src) {
    if (placeholder) {
      innerElement = (
        <div className="h-full w-full flex items-center justify-center">
          <span
            className={`${placeholderSize} font-medium leading-none text-white`}
          >
            {placeholder}
          </span>
        </div>
      );
    } else {
      innerElement = <AvatarIcon />;
    }
  }

  let notificationSize = 'h-1.5 w-1.5';
  switch (size) {
    case 8:
      notificationSize = 'h-2 w-2';
      break;
    case 10:
      notificationSize = 'h-2.5 w-2.5';
      break;
    case 12:
      notificationSize = 'h-3 w-3';
      break;
    case 14:
      notificationSize = 'h-3.5 w-3.5';
      break;
  }

  let notificationElement = (
    <span
      className={`absolute ${notification}-0 right-0 block ${notificationSize} rounded-full ring-2 ring-white bg-${notificationColor}`}
    ></span>
  );

  return (
    <span
      style={src ? { backgroundImage: `url(${src})` } : {}}
      className={`inline-block ${widthheight} ${rounded} relative overflow-hidden bg-center bg-no-repeat bg-cover ${backgroundColor}`}
    >
      {innerElement}
      {notification && notificationElement}
    </span>
  );
};
