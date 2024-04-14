import {API_URL} from '../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching movie: ${Date.now()}`);
  // await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  console.log(`Done: ${Date.now()}`);
  return response.json();
}

export default async function MovieInfo({id}: {id: string}) {
  const movie = await getMovie(id);
  return (
    <>
      <h3>Movie Info</h3>
      <div>{JSON.stringify(movie)}</div>
    </>
  );
}
