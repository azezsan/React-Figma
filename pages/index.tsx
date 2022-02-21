import Head from 'next/head'
import Image from 'next/image'
import { homedir } from 'os'
import styles from '../styles/Home.module.css'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

const incentives = [
  {
    name: 'Free Shipping',
    description: "lorem ipsum dolor sit amet labore et dolore magna aliqua adipisicing elit",
    imageSrc: '/notifications.svg',
  },
  {
    name: '24/7 Customer Support',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit labore et dolore magna aliqua',
    imageSrc: '/history.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description: "lorem ipsum dolor sit amet consectetur  elit sed do eiusmod tempor incididunt ut ", 
    imageSrc: '/board.svg',
  },
]


export default function Home() {
  return (
    // <!-- Hero --> //
    <>
      <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mt-8 mb-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:pt-14">
            <h1>
              <span className="mt-1 block text-2xl tracking-tight font-bold sm:text-3xl xl:text-4xl">
                <span className="block text-gray-900 font-open">Enabling Property Managers</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-work">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p className="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
              <form action="#" method="POST" className="mt-3 sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300 placeholder:pl-3"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-400 shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our&nbsp;
                <a href="#" className="font-medium text-gray-900 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg">
              <video autoPlay muted loop className="w-full">
                <source src='/home.webm' type='video/webm' data-src='/home.webm' />
              </video>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- End Hero --> */}
      <div className="max-w-7xl mx-auto px-4 mb-4 sm:px-6 sm:mb-8 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto">
          <span className="mt-1 block text-2xl tracking-tight font-bold sm:text-3xl xl:text-4xl text-center">
            <span className="block text-gray-900 font-open">Enabling Property Managers</span>
          </span>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center font-work">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
          </p>
        </div>
      </div>
      {/* <!-- Incentives --> */}
      <div>
        <div className="max-w-7xl mx-auto mb-16 sm:px-2 sm:mb-32 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <Image width={160} height={112} src={incentive.imageSrc} alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
