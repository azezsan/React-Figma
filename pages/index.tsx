import Head from 'next/head'
import Image from 'next/image'
import { homedir } from 'os'
import styles from '../styles/Home.module.css'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

const people = [
  {
    name: 'Rohan De Launey',
    role: 'Founder',
    imageUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ramsey Rashid',
    role: 'Co-Founder',
    imageUrl:
      'https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

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
      {/* <!-- About Us --> */}
      <div>
        <div className="max-w-7xl mx-auto mb-12 px-4 text-center sm:px-6 lg:px-8 lg:mb-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-4xl font-bold tracking-tight sm:text-4xl font-open">About</h2>
              <h3 className='text-xl text-gray-500 font-open font-semibold'>
                Inosio is founded by technologists that are passionate about efficiency.
              </h3>
              <p className="text-xl text-gray-500 font-work font-normal">
                With 10 years of Property Management experience and over 20 years of software development behind us, we’re excited to finally launch our own solution. We are establishing a brand built on authenticity and efficiency. We believe that by holding true to our values, scaling thoughtfully, and focusing on solution-led success we will grow a successful business.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-6">
                    <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover" src={person.imageUrl} alt="" />
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-blue-600">{person.role}</p>
                      </div>
                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
