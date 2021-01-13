import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';

interface BannerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  to?: string;
  height?: 'h-18' | 'h-24' | 'h-32';
}

export const Banner: FC<BannerProps> = ({
  src,
  to,
  height = 'h-24',
  onClick,
  ...props
}) => {
  const history = useHistory();
  let style: Record<string, string> = { width: 'calc(100vw - 2.5rem)' };

  if (src) {
    style = {
      ...style,
      backgroundImage: `url(${src})`,
    };
  }

  return (
    <li>
      <button
        {...props}
        style={style}
        className={`rounded-xl bg-center bg-no-repeat bg-cover bg-gray-500 ${height}`}
        onClick={to ? () => history.push(to) : onClick}
      ></button>
    </li>
  );
};
