import React, { FC, ReactElement } from 'react';
import { AvatarIcon } from './icons';

interface AvatarProps {
  size?: 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24;
  type?: 'circular' | 'rounded';
  src?: string;
  placeholder?: string;
  notification?: 'top' | 'bottom';
  notificationColor?: 'gray-300' | 'red-400' | 'green-400' | string;
  notificationImg?: ReactElement;
  onClick?: () => void;
}

export const Avatar: FC<AvatarProps> = ({
  size = 8,
  type = 'circular',
  placeholder,
  src,
  notification,
  notificationColor = 'gray-300',
  notificationImg,
  onClick,
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
    case 16:
    case 18:
      placeholderSize = 'text-xl';
      break;
    case 20:
    case 22:
    case 24:
      placeholderSize = 'text-2xl';
      break;
  }

  let innerElement = <></>;

  if (!src) {
    if (placeholder) {
      innerElement = (
        <span
          className={`${placeholderSize} font-medium leading-none text-white`}
        >
          {placeholder}
        </span>
      );
    } else {
      innerElement = <AvatarIcon className="h-full w-full text-gray-300" />;
    }
  }

  let notificationSize = size / 4;

  let notificationElement = (
    <span
      className={`absolute ${notification}-0 right-0 block
                  w-${notificationSize} h-${notificationSize} rounded-full ring-2 ring-white
                  bg-${notificationColor}`}
    >
      <div className="w-full h-full flex items-center justify-center">
        {notificationImg}
      </div>
    </span>
  );

  return (
    <span
      style={src ? { backgroundImage: `url(${src})` } : {}}
      className={`inline-block ${widthheight} ${rounded} relative bg-center bg-no-repeat bg-cover ${backgroundColor}`}
      onClick={onClick}
    >
      <div
        className={`h-full w-full ${rounded} overflow-hidden flex items-center justify-center`}
      >
        {innerElement}
      </div>
      {notification && notificationElement}
    </span>
  );
};
