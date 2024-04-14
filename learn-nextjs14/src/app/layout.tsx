/**
 * @file 전체 URL에 적용되는 기본 레이아웃 파일
 * @author fixalot
 * @since 2024-04-14
 */

import type {Metadata} from 'next';
import Navigation from './components/navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Home | Next Movies'
  },
  description: 'The best movies on the best framework.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
