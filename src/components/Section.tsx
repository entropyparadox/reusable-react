import React, { FC } from 'react';

interface SectionProps {
  flexDirection?: 'flex-col' | 'flex-row';
  alignItems?: 'items-stretch' | 'items-center';
}

export const Section: FC<SectionProps> = ({
  children,
  flexDirection = 'flex-col',
  alignItems = 'items-stretch',
}) => {
  return (
    <section
      className={`flex ${flexDirection} ${alignItems} space-y-4 px-5 py-4 bg-white`}
    >
      {children}
    </section>
  );
};
