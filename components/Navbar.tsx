import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useRef, useState, useEffect } from 'react'

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: IconThree,
  },
]


export default function Navbar() {

  let timeout
  const timeoutDuration = 0

  const buttonRef = useRef(null) // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false)

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState)
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click() // eslint-disable-line
  }

  const onHover = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  const handleClick = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }

  let [openMenu, setOpenMenu] = useState(false)
  return (
    // <!-- navbar goes here -->
    <nav className="bg-white">
      <div className="mx-auto">
        <div className="flex justify-between">


          {/* <!-- logo --> */}
          <div>
            <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="font-bold">Better Dev</span>
            </a>
          </div>

          {/* <!-- primary nav --> */}
          <div className="hidden lg:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 text-base font-medium">Home</a>
            <Popover className="relative">
              {({ open }) => (
                <div
                  onMouseEnter={() => onHover(open, "onMouseEnter")}
                  onMouseLeave={() => onHover(open, "onMouseLeave")} >
                  <Popover.Button
                    ref={buttonRef}
                    className={`
                            ${open ? '' : 'text-opacity-90'}
                            text-black group px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    onClick={() => handleClick(open)}
                  >
                    <span>Solutions</span>
                    <span className=' pl-2 z-[2] relative'>
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${open ? ' Navbar-Spin-Leave stroke-gray-900 ' : ' Navbar-Spin-Enter stroke-gray-600 '}`}>
                        <path d="M1 1L5 5L9 1" stroke-width="2" stroke-linecap="round"></path>
                      </svg>
                    </span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-72 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative block bg-white p-7 ">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center px-2 py-4 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                                <item.icon aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="p-4 bg-gray-50">
                          <a
                            href="##"
                            className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900">
                                Documentation
                              </span>
                            </span>
                            <span className="block text-sm text-gray-500">
                              Start integrating products and tools
                            </span>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </div>
              )}
            </Popover>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 text-base font-medium">Prop Tech Providers</a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 text-base font-medium">About us</a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900 text-base font-medium">Contact us</a>
          </div>


          {/* <!-- secondary nav --> */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="" className="py-2 px-4 border-[1px] border-blue-400 text-blue-400 rounded-full transition duration-300">Sign up</a>
            <a href="" className="py-2 px-4 bg-blue-400 hover:bg-blue-300 text-white rounded-full transition duration-300">Sign in</a>
          </div>

          {/* <!-- mobile button goes here --> */}
          <div className="lg:hidden flex items-center" onClick={() => setOpenMenu(!openMenu)}>
            <button className="mobile-menu-button">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div className={`mobile-menu lg:hidden ${openMenu ? '' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Solutions</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Prop Tech Providers</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About us</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact us</a>
      </div>
    </nav>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}