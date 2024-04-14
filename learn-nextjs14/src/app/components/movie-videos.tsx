import {API_URL} from '../(home)/page';

async function getVideos(id: string) {
  console.log(`Fetching movie: ${Date.now()}`);
  // await new Promise(resolve => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  console.log(`Done: ${Date.now()}`);
  return response.json();
}

export default async function MovieVideos({id}: {id: string}) {
  const videos = await getVideos(id);
  return (
    <>
      <h3>Movie Videos</h3>
      <div>{JSON.stringify(videos)}</div>
    </>
  );
}
