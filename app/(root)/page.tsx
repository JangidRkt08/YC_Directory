import Image from "next/image";
import styles from "./page.module.css";
import Searchform from "../components/Searchform";

export default async function Home({searchParams} :{
  searchParams :Promise<{query?:string}>
}) {

  const query = (await searchParams).query
  return (
    <>
      <section className="pink_container">
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
    </>
  );
}
