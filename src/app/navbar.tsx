import React from 'react'
import Profile from '../../public/profile.jpg'
import HomeIcon from '../../public/svg/home_icon.svg'
import AboutIcon from '../../public/svg/about_icon.svg'
import ContactIcon from '../../public/svg/contact_icon.svg'
import SunIcon from '../../public/svg/sun_icon.svg'
import HamburgerIcon from '../../public/svg/hamburger_icon.svg'
import GithubIcon from '../../public/svg/github_icon.svg'
import Image from 'next/image'
import Link from 'next/link'

const navLink = [
    { name: "About" },
    { name: "Contact" },
    { name: "Project" }
]

const NavbarPage = () => {
  return (
    <div>
        <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 '>
            <div className='flex-1 flex flex-col min-h-0  border-r-[1.5px]'>
                <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
                    <div className='flex-shrink-0 flex p-4 bg-background h-[9.9vh]'>
                        <div className='flex-shrink-0 w-full group block'>
                            <div className='flex items-center justify-between'>
                                <Link href='/about' className='flex items-center'>
                                    <div>
                                        <Image alt='profile' src={Profile} className='inline-block h-9 w-9 rounded-full object-cover object-top'/>
                                    </div>
                                    <div className="ml-3">
                                        <p className='text-xs font-medium '>Sugiart Tampubolon</p>
                                        <p className='text-xs font-medium text-amber-500 group-hover:text-primary/85'>View profile</p>
                                    </div>
                                </Link>
                                <button type='button' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10'>
                                    <Image alt='sun icon' src={SunIcon} className='lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
                                </button>
                                <button type='button' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden'>
                                    <Image alt='sun icon' src={HamburgerIcon} className='lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div data-orientation="horizontal" role='none' className='shrink-0 bg-border h-[1px] w-full'></div>
                    <nav className='mt-5 flex-1 px-4 space-y-1'>
                        <Link className='hover:bg-muted hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-black' href='/'>
                            <Image width={24} height={24} className=' fill-orange-400 mr-3 h-5 w-5' alt='home icon' src={HomeIcon} /> Home
                        </Link>
                        <Link className='hover:bg-muted hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-black' href='/about'>
                            <Image width={24} height={24} className='mr-3 h-5 w-5 fill-orange-400' alt='about icon' src={AboutIcon} /> About
                        </Link>
                        <Link className='hover:bg-muted hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md text-black' href='/about'>
                            <Image width={24} height={24} className='mr-3 h-5 w-5 fill-orange-400' alt='about icon' src={ContactIcon} /> Contact
                        </Link>
                        <div className='py-3'>
                            <div data-orientation="horizontal" role='none' className='shrink-0 bg-border h-[1px] w-full'></div>
                        </div>
                    </nav>
                </div>
                <div className='flex-shrink-0 flex p-4 bg-background h-[9.9vh]'>
                    <div className='flex-shrink-0 items-center h-full flex w-full group'>
                        <button type='button' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-400 text-white hover:bg-primary/90 h-10 px-4 py-2 w-full'>
                            <Image alt='sun icon' src={GithubIcon} className='h-[1.2rem] w-[1.2rem] fill-orange-400 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-1'/> Login with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='sticky top-0 z-10 md:hidden  flex justify-between items-center p-4 border-b bg-background'>
            <Link href='/' className='text-xl sm:text-2xl font-bold'>
                Sugiarto Tampubolon
            </Link>
            <div className='flex gap-x-3'>
                <button type='button' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10'>
                    <Image alt='sun icon' src={SunIcon} className='lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
                </button>
                <button type='button' className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden'>
                    <Image alt='sun icon' src={HamburgerIcon} className='lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default NavbarPage