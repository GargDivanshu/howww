import React from 'react'

const Index = (props) => {
  return (
    <div>
    Hey there watch our videos 
    {
    props.myVideo.data.map((vid) => {
        <div key={vid.id}>
    <div className=" text-center mx-auto w-4/5">
      Title - {vid.attributes.Title}
    </div>

    <div>
        content - 
    </div>
    </div>
    }
    )
    }
    </div>
  )
}

export default Index

export async function getStaticProps() {
    let headers = { Authorization :"Bearer 719b205edd50091009425c071130ffa75676d4eadde58f6ca8b825daf5bc7752b06d5181bbc9ead9fe486bbc0564be8b69ed6f192633c37893a419759ad013eda0c42a30e6d02c43a9cb478316738fa0f41cae0bda9e53ee296325fecc45fdcfe551b62d6c2c0c1f605d88958c4e96ce6346c75201315a06e587b35bb4f8ce12"
    };
    const video = await fetch(`http://localhost:1337/api/videos?populate=*`,{headers:headers});
    console.log(video);
    console.log('am i working')
    const myVideo = await video.json();
    console.log(myVideo.data)
    return {
        props: {
            myVideo: myVideo,
        }
    }
}