import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useRef, useState, useEffect } from 'react'

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

    let [openMenu,setOpenMenu] = useState(false)
  return (
    // <!-- navbar goes here -->
    <nav class="bg-white">
        <div class="mx-auto">
            <div class="flex justify-between">

            <div class="flex space-x-4">
                {/* <!-- logo --> */}
                <div>
                <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <svg class="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span class="font-bold">Better Dev</span>
                </a>
                </div>

                {/* <!-- primary nav --> */}
                <div class="hidden lg:flex items-center space-x-1">
                <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900 text-base font-medium">Home</a>
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
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className=' hover:animate-spin'>
                                <path d="M1 1L5 5L9 1" stroke="gray" stroke-width="2" stroke-linecap="round"></path>
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
                        <Popover.Panel className="absolute z-10 w-80 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <ul className='relative gap-8 bg-white px-5 py-3 lg:grid-cols-2 m-0 text-gray-700 hover:text-gray-900 text-base font-medium'>
                                    <li className=' py-2 '>Operational Excellence</li>
                                    <li className=' py-2'>Features & Pricing</li>
                                    <li className=' py-2'>Integrations</li>
                                    <li className=' py-2'>Developers</li>
                                </ul>
                            </div>
                        </Popover.Panel>
                        </Transition>
                    </div>
                    )}
                </Popover>
                <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900 text-base font-medium">Prop Tech Providers</a>
                <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900 text-base font-medium">About us</a>
                <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900 text-base font-medium">Contact us</a>
                </div>
            </div>

            {/* <!-- secondary nav --> */}
            <div class="hidden lg:flex items-center space-x-3">
                <a href="" class="py-2 px-4 border-[1px] border-blue-400 text-blue-400 rounded-full transition duration-300">Sign up</a>
                <a href="" class="py-2 px-4 bg-blue-400 hover:bg-blue-300 text-white rounded-full transition duration-300">Sign in</a>
            </div>

            {/* <!-- mobile button goes here --> */}
            <div class="lg:hidden flex items-center" onClick={()=>setOpenMenu(!openMenu)}>
                <button class="mobile-menu-button">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>

            </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div class={`mobile-menu lg:hidden ${openMenu ? '':'hidden'}`}>
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Solutions</a>
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Prop Tech Providers</a>
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">About us</a>
            <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Contact us</a>
        </div>
    </nav>
  )
}
