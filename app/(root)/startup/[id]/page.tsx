import { Suspense } from "react";
import { PLAYLIST_BY_SLUG_QUERY, STRTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import markdownit from "markdown-it";

import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

const md = markdownit();

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;




  // ----------> Paralell Fetch  { time(post and editorPosts ) }   <----------
  const [post , {select:editorPosts}] = await Promise.all([
    client.fetch(STRTUP_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
    slug:"editor-s-choice"
  })
  ])


  // ----------> Sequential Fetch  {time(post)+time(editorPosts) } <----------
  // const post = await client.fetch(STRTUP_BY_ID_QUERY, { id });

  // const {select:editorPosts} = await client.fetch(PLAYLIST_BY_SLUG_QUERY, {
  //   slug:"editor-s-choice"
  // })

  if (!post) {
    return <h1 className="text-3xl">Startup not found</h1>;
  }

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>

        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <Image
          width={1000}
          height={1000}
          src={post.image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author?.image}
                alt="avatar"
                width={60}
                height={60}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{post.author?.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post.author?.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>
          <h3 className="text-30-semibold">Pitch details</h3>

          {parsedContent ? (
            <article
              dangerouslySetInnerHTML={{ __html: parsedContent }}
              className="prose max-w-4xl font-work-sans break-all"
            />
          ) : (
            <p className="no-reslut">No result</p>
          )}
        </div>

        <hr className="divider" />

        {/* {TODO: Editor sleected startups} */}
        {editorPosts?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="text-30-semibold">Editor Picks</p>

            <ul className="mt-7 card_grid-sm">
              {editorPosts.map((post: StartupTypeCard, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )}



        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
