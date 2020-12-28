import React, { FC } from 'react';

interface SectionProps {
  flexDirection?: 'flex-col' | 'flex-row';
  alignItems?: 'items-stretch' | 'items-center';
  spaceY?: 'space-y-2' | 'space-y-4';
}

export const Section: FC<SectionProps> = ({
  children,
  flexDirection = 'flex-col',
  alignItems = 'items-stretch',
  spaceY = 'space-y-4',
}) => {
  return (
    <section
      className={`flex ${flexDirection} ${alignItems} ${spaceY} px-5 py-4 bg-white`}
    >
      {children}
    </section>
  );
};
