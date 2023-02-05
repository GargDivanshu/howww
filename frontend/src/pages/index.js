import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './../components/Header';
import {useState, useEffect } from 'react';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [notes, setNotes] = useState(()=> {
  //   return JSON.parse(localStorage.getItem('react-notes-app-data')) || []
  // });

  // useEffect(() => {
  //   localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  //  }, [notes]);
   

   const addNote = (heading, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      heading: heading,
      text: text,
      date: date.toLocaleDateString(),
    };  
  }



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-poppins min-h-max bg-[#FFFF]">
      <Header/>
      <div className="mx-auto text-center mt-16">
       <div className="text-4xl font-semibold">Try our free <span className="text-[#FF2E00]">how to</span></div>
       <div className="text-4xl font-semibold">checklist now!</div>
      </div>

      <div className="">
        <div className="mt-12 text-center p-10 text-3xl font-semibold rounded-xl w-3/5 mx-auto bg-[#f4b2a3] backdrop-blur-sm">
          Whats your business type ? 
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="bg-orange rounded-lg m-7 text-white text-2xl font-semibold">
              B2B
            </div>
            <div className="bg-orange rounded-lg m-7 text-white text-2xl font-semibold">
               B2C
            </div>
          </div>
        </div>
      </div>

      <div className="text-3xl font-semibold mx-auto text-center mt-20">
      <p className="m-1">We help businesses to get  </p>
      <p className="m-1">their  'Checklist' in order!</p>
      </div>
      </div>
      
      <div className="text-3xl font-semibold mx-auto text-center mt-20">
        <p> <span className="text-orange">how to.</span> checklist by </p>
        <p>your favorite entrepreneurs!</p>
      </div>


      <div className="text-3xl font-semibold mx-auto text-center mt-20">
        <p> build your own <span className="text-orange">how to.</span></p>
        <p>custom checklist</p>

        <button className="bg-orange text-white text-base font-medium px-10 py-3 mt-4 rounded-full mx-auto">
       custom checklist
      </button>
      </div>

    </>
  )
}
