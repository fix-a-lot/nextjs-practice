/**
 * @file 영화 상세 정보 페이지 컴포넌트
 * @author fixalot
 * @since 2024-04-14
 */

import MovieInfo from '@/app/components/movie-info';
import MovieVideos from '@/app/components/movie-videos';
import {Suspense} from 'react';

export const metadata: Metadata = {
  title: 'Movie Detail'
};

export default async function MovieDetail({params: {id}}: {params: {id: string}}) {
  return (
    <div>
      <h2>Movie Detail Page</h2>
      <Suspense
        fallback={
          <>
            <h3>Movie Info</h3>
            <p>Loading movie info</p>
          </>
        }
      >
        <MovieInfo id={id} />
      </Suspense>
      <Suspense
        fallback={
          <>
            <h3>Movie Videos</h3>
            <p>Loading movie videos</p>
          </>
        }
      >
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
