'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname();
  console.log('path:', path);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href="/about-us">About us</Link> {path === '/about-us' ? '🔥' : ''}
        </li>
        <li>
          <Link href="/about-us/company/jobs/sales">sales</Link>{' '}
          {path === '/about-us/company/jobs/sales' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}
