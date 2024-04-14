/**
 * @file 전통적인 클라이언트 렌더링으로 데이터를 fetching 하는 방법
 * @author fixalot
 * @since 2024-04-14
 */

'use client';

import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  });
  return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
}
