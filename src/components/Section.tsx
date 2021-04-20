import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tw?: TWProperties;
}

export const Section: FC<SectionProps> = ({ children, tw = {}, ...props }) => {
  const defaultTW = new TW({
    display: 'flex',
    flexDirection: 'flex-col',
    paddingX: 'px-5',
    paddingY: 'py-4',
    spaceY: 'space-y-4',
  }).merge(tw);

  return (
    <section className={defaultTW.toClassName()} {...props}>
      {children}
    </section>
  );
};
