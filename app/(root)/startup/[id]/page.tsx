import { STRTUP_BY_ID_QUERY } from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import React from 'react'

export const experimental_ppr = true

const page = async ({params}:{params:Promise<{id:string}>}) => {
    const id = (await params).id;

    console.log(id);
    

    const post = await client.fetch(STRTUP_BY_ID_QUERY, {id});

    if(!post){
        return (
            <h1 className='text-3xl'>
                Startup not found
            </h1>
        )
    }

  return (
    <h1 className='text-3xl'>
        {post.title}
    </h1>
  )
}

export default page