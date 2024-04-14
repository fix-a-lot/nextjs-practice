/**
 * @file 서버 사이드에서 fetching 하는 방법
 * @author fixalot
 * @since 2024-04-14
 */

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home'
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  // await new Promise(resolve => setTimeout(resolve, 3000));
  console.log('I am fetching now');
  const response = await fetch(API_URL);
  return await response.json();
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
