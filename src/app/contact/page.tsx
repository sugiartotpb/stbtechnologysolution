import React from 'react'
import { Icon } from '@iconify/react';

const ProfilePage = () => {
  return (
    <section id="contact" className="py-12  ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 icon-orange-block">CONTACT</h2>
        <p className="mb-4">Feel free to reach out for any inquiries or collaborations!</p>
        <div className="flex justify-center">
          <a href="mailto:sugiarttampubolon@gmail.com" className="bg-orange-500 hover:bg-orange-800 text-white py-3 px-8 rounded-full transition duration-300">Email Me</a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/sugiarto-tampubolon-0b088389/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:icon-orange-block">
            <svg className="w-8 h-8 icon-orange-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
          </a>
          <a href="https://github.com/sugiartotpb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:icon-orange-block">
            <svg className="w-8 h-8 icon-orange-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03a9.44 9.44 0 012.5-.34 9.5 9.5 0 012.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.66.64.71 1.03 1.61 1.03 2.71 0 3.87-2.36 4.73-4.6 4.98.36.31.68.92.68 1.85l-.01 2.76c0 .26.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage