import Head from 'next/head'
import Image from 'next/image'
import { homedir } from 'os'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <!-- Header --> //
    <>
      <div className='flex justify-between items-start max-w-6xl w-full m-auto p-[10px] relative'>
        <div className='min-w-[440px] pt-[60px]'>
          <h1 className="text-left text-cyan-900 font-extrabold text-4xl leading-10 font-serif">
            Enabling Property Managers
          </h1>
          <p className=' mt-4 mb-8 font-normal text-xl leading-7'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde inventore molestias ullam pariatur fuga incidunt voluptatum saepe nostrum culpa?
          </p>
          <p className=' mt-4 mb-8 font-normal text-xl leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique doloribus eveniet eum dolorum. Illo exercitationem ad perspiciatis et cupiditate dignissimos distinctio placeat ipsam.
          </p>
          <div>
            <button className='flex justify-center flex-row items-center px-10 py-4 bg-blue-400 rounded-3xl shadow text-white'>
              Enter the App
            </button>
          </div>
        </div>
        <div>
          <div className=' w-[600px]'>
            <video autoPlay muted loop>
              <source src='/home.webm' type='video/webm' data-src='/home.webm' />
            </video>
          </div>
        </div>
      </div>
    </>
  )
}
