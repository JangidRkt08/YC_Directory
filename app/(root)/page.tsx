import Image from "next/image";
import styles from "./page.module.css";
import Searchform from "@/components/Searchform";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

import { STARTUPS_QUERY } from "@/lib/queries";
import { Startup } from "@/sanity/types";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams} :{
  searchParams :Promise<{query?:string}>
}) {

  const query = (await searchParams).query;

  const params ={
    search:query || null
  }

  // const posts = await client.fetch(STARTUPS_QUERY);

  const {data:posts} = await sanityFetch({query:STARTUPS_QUERY,params});


  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect with Entrepreneures
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <Searchform query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? ` Searched for  For ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index:number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startup Found</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}
