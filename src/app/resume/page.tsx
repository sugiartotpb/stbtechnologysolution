import Link from 'next/link'
import React from 'react'

const ResumePage = () => {
  return (
    <main className='font-jost hyphens-manual'>
        <section className='p-3 my-auto mx-auto max-w-3xl bg-gray-100 rounded-2xl border-4 border-gray-700 sm:p-9 md:p-16 lg:mt-6 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter'>
            <header className='inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300'>
                <section className='block'>
                    <h1 className='mb-0 text-2xl font-bold text-gray-700'>
                        Sugiarto Tampubolon
                    </h1>
                    <h2 className='m-0 text-xl font-semibold text-gray-700 leading-snugish'>
                        Full stack development
                    </h2>
                    <h3 className='m-0 mt-2 text-xl font-semibold text-gray-500 leading-snugish'>Batam - Indonesian</h3>
                </section>
            </header>
            <section className='col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full'>
                <section className='flex-col'>
                    <section className='pb-2 mt-4 mb-0 first:mt-0'>
                        <section className='break-inside-avoid'>
                            <section className='pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid'>
                                <ul className='pr-7 list-inside'>
                                    <li className='mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:'>
                                        <Link href='/' className='group'>
                                            <span className='mr-2 font-semibold text-gray-700 leading-snugish text-sm'>Portfolio: </span> stpb-tech.com
                                            <span> ↗</span>
                                        </Link>
                                    </li>
                                    <li className='mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:'>
                                        <Link href='https://github.com/sugiartotpb' className='group'>
                                            <span className='mr-2 font-semibold text-gray-700 leading-snugish text-sm'>Github: </span> sugiartotpb
                                            <span> ↗</span>
                                        </Link>
                                    </li>
                                    <li className='mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:'>
                                        <Link href='/' className='group'>
                                            <span className='mr-2 font-semibold text-gray-700 leading-snugish text-sm'>Email: </span> sugiarttampubolon@gmail.com
                                            <span> ↗</span>
                                        </Link>
                                    </li>
                                    <li className='mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-md print:'>
                                        <Link href='https://www.linkedin.com/in/sugiarto-tampubolon-0b088389/' className='group'>
                                            <span className='mr-2 font-semibold text-gray-700 leading-snugish text-sm'>Linkedin: </span> sugiarto-tampubolon
                                            <span> ↗</span>
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                            <section className='pb-2 mt-0 border-b-4 border-gray-300 first:mt-0'>
                                <section className='break-inside-avoid'>
                                    <h2 className='mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal'>SUMMARY</h2>
                                    <section className='mb-2 break-inside-avoid'>
                                        <p className='mt-2 leading-normal text-gray-700 text-md'>
                                            Experienced full-stack web developer with a strong track record of independently addressing complex business requirements and overcoming challenges to deliver polished and user-friendly web solutions.
                                        </p>
                                    </section>
                                </section>
                            </section>
                            <section className='pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid'>
                                <section className='break-inside-avoid'>
                                    <h2 className='mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal'>EDUCATION</h2>
                                    <section className='mb-2 break-inside-avoid'>
                                        <header>
                                            <h3 className='text-lg font-semibold text-gray-700 leading-snugish'>Putra Batam University</h3>
                                            <p className='leading-normal text-gray-500 text-md'>2008 - 2012 | Information System</p>
                                        </header>
                                        <ul className='mt-2 list-disc list-inside text-gray-800 text-md'>
                                            <li>
                                                <span className='font-semibold text-md'>Skills: </span>Programming, Algorithms, Data Structures, Software Development
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                            </section>
                            <section className='pb-0 mt-2 border-b-4 border-gray-300 first:mt-0 break-inside-avoid'>
                                <section className='break-inside-avoid'>
                                    <h2 className='mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal'>SKILLS</h2>
                                    <section className='mb-2 break-inside-avoid'>
                                        <section className='mt-1 last:pb-1'>
                                            <ul className='flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6'>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    HTML5
                                                </li>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    CSS3
                                                </li>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    JavaScript
                                                </li>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    TypeScript
                                                </li>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    ASP .Net MVC
                                                </li>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    ASP .Net Core
                                                </li>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    MS SQL Server
                                                </li>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    Mysql
                                                </li>
                                                <li className="p-1.5 mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                                                    Postgresql
                                                </li>
                                            </ul>
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className='pb-2 mt-0 border-b-4 border-gray-300 first:mt-0'>
                                <section className='break-inside-avoid'>
                                    <h2 className='mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal'>EXPERIENCE</h2>
                                    <section className='mb-0 break-inside-avoid'>
                                        <header>
                                            <p className='font-semibold text-gray-800 text-md leading-snugish'>Full Stack Web Developer</p>
                                            <p className='text-sm leading-normal text-gray-500'>2012 - Present</p>
                                        </header>
                                        <ul className='pl-3 mt-2 font-normal text-gray-700 text-md leading-snugish'>
                                            <li>
                                                <span className='text-gray-500 transform -translate-y-px select-none'>›</span> Created high-quality, customized web applications from scratch, employing a diverse set of programming languages, including HTML, CSS, JavaScript, ASP .NET MVC, and ASP .NET Core, to fulfill unique client requirements.
                                            </li>
                                            <li>
                                                <span className='text-gray-500 transform -translate-y-px select-none'>›</span> Leveraged a range of bleeding edge front-end frameworks like React.js, Nullstack and Vue.js, as well as back-end frameworks such as Node.js and Express, to deliver robust and scalable web solutions.
                                            </li>
                                            <li>
                                                <span className='text-gray-500 transform -translate-y-px select-none'>›</span> Designed and implemented databases using SQL and NoSQL technologies like MS SQL Server, MySQL, PostgreSQL, MongoDB, and Firebase, optimizing data storage and management.
                                            </li>
                                        </ul>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </main>
    
  )
}

export default ResumePage