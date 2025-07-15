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

  const query = (await searchParams).query

  // const posts = await client.fetch(STARTUPS_QUERY);

  const {data:posts} = await sanityFetch({query:STARTUPS_QUERY})

  // console.log(JSON.stringify(posts, null, 2));
  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: {
  //       id: 1,
  //       name: "John Doe",
  //     },
  //     _id: 1,
  //     decription: "description",
  //     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
     
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];

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
