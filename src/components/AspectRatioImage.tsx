import React, { FC } from 'react';
import { Rounded } from '../types/rounded';

interface AspectRatioImageProps {
  src: string;
  alt: string;
  pb: string;
  rounded?: Rounded;
}

export const AspectRatioImage: FC<AspectRatioImageProps> = ({
  children,
  src,
  alt,
  pb,
  rounded = 'rounded-none',
}) => {
  return (
    <div className={`relative ${pb} ${rounded} bg-gray-50`}>
      <img
        className={`absolute w-full h-full ${rounded} object-cover`}
        src={src}
        alt={alt}
      />
      {children}
    </div>
  );
};
