import Hero from '@/components/Hero';
import { fetchAnime } from "./action";
import LoadMore from '@/components/LoadMore';

export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <>
      <Hero />
      <section className='container mx-auto md:px-16 px-4 py-2'>
        <h2 className="text-3xl text-white font-bold mb-10">Explore Anime</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
        </div>
        <LoadMore />
      </section>
    </>
  )
}
