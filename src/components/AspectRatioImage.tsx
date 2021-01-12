import React, { FC } from 'react';

interface AspectRatioImageProps {
  src: string;
  alt: string;
  pb: string;
  rounded?: 'rounded';
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
