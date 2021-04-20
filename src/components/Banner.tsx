import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { TW, TWProperties } from '../tailwind/tw';

interface BannerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  to?: string;
  tw?: TWProperties;
}

export const Banner: FC<BannerProps> = ({
  src,
  to,
  onClick,
  tw = {},
  ...props
}) => {
  const history = useHistory();

  const defaultTW = new TW({
    backgroundColor: 'bg-gray-500',
    backgroundPosition: 'bg-center',
    backgroundRepeat: 'bg-no-repeat',
    backgroundSize: 'bg-cover',
    borderRadius: 'rounded-xl',
    height: 'h-24',
  }).merge(tw);

  let style: Record<string, string> = { width: 'calc(100vw - 2.5rem)' };
  if (src) {
    style.backgroundImage = `url(${src})`;
  }

  return (
    <li>
      <button
        className={defaultTW.toClassName()}
        style={style}
        onClick={to ? () => history.push(to) : onClick}
        {...props}
      ></button>
    </li>
  );
};
