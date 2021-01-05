import React, { FC } from 'react';

interface BannerProps {
  src?: string;
  height?: 'h-18' | 'h-24' | 'h-32';
}

export const Banner: FC<BannerProps> = ({ src, height = 'h-24' }) => {
  let style: Record<string, string> = { width: 'calc(100vw - 2.5rem)' };

  if (src) {
    style = {
      ...style,
      backgroundImage: `url(${src})`,
    };
  }

  return (
    <li
      style={style}
      className={`rounded-xl bg-center bg-no-repeat bg-cover bg-gray-500 ${height}`}
    ></li>
  );
};
