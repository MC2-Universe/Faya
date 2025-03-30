'use client';

import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

const EXTERNAL_HREF_REGEX = /https?:\/\//;

const A: FC<LinkProps> = ({ href = '', ...props }) => {
  const isOutbound = EXTERNAL_HREF_REGEX.test(href as string);
  const isOfficial = String(href).includes('faya') || String(href).includes('mc2-universe');
  return (
    <Link
      href={href}
      rel={isOutbound && !isOfficial ? 'nofollow' : undefined}
      target={isOutbound ? '_blank' : undefined}
      {...props}
    />
  );
};

export default A;
