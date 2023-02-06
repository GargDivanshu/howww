import React from 'react'

const MyVid = ({ video }) => {
  return (
    <div>MyVid</div>
  )
}

export default MyVid


export async function getStaticProps({params: {slug}}){
    let headers={
        Authorization :"Bearer d0bc1ed6383f351a56430e87c72136c231269c3bdd7aeb9cb9aa9f7047e6fbce839e695eaaf80d2e0f2a595c43c8773b2ccfe8b5525e63e9ac1f2922c545aa80e34af7e763091218cf91733533d2bec9d875974b7f784b57dc72bfb345e50be93763732fee3f99fb2416cf06fde784ffb214e73a08a7eece0c91c6a17a81d8e6"
    }
   const vidSlug = await fetch(`http://localhost:1337/api/videos/?slug=${slug}`, {headers:headers});
   const res = await vidSlug.json();

   return {
    props: {
        video: found[0]
    }
   }
}


export async function getStaticPaths(context){
    let headers={
        Authorization :"Bearer d0bc1ed6383f351a56430e87c72136c231269c3bdd7aeb9cb9aa9f7047e6fbce839e695eaaf80d2e0f2a595c43c8773b2ccfe8b5525e63e9ac1f2922c545aa80e34af7e763091218cf91733533d2bec9d875974b7f784b57dc72bfb345e50be93763732fee3f99fb2416cf06fde784ffb214e73a08a7eece0c91c6a17a81d8e6"
    }
    const vid = await fetch(`http://localhost:1337/api/videos`, {headers:headers})
    const myVideo = await vid.json()

    return {
        paths: myVideo.map(videos => ({
            params: {slug: String(videos.slug)}
        })),

        fallback: false,
    }
}