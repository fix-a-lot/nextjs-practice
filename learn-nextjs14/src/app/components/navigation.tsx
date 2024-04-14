/**
 * @file 네비게이션 컴포넌트
 * @author fixalot
 * @since 2024-04-14
 */

'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';

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
        <li>
          <Link href="/movies/1234?region=kr">Movies</Link> {path === '/movies' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}
