'use client'

import { useChat } from 'ai/react'
import React, { useEffect, useRef } from 'react'
import Textarea from 'react-textarea-autosize'

const ChatbotPage = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api'
    })

    const messageEndRef = useRef<HTMLInputElement>(null)

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

  return (
    <div className='bg-neutral-500 text-white'>
        {messages.length !== 0 ? (
            <div className='pb-56 pt-5 space-x-5 mx-auto relative'>
                {messages.map((message) => (
                    <div key={message.id} className='w-full'>
                        {message.role === 'user' ? (
                            <div className='flex gap-x-2'>
                                <div className='bg-gray-500 h-12 w-12 rounded-lg'>
                                    <svg className='w-full h-full text-white p-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" fill="currentColor"/><path fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"/></svg>
                                </div>
                                <p className='rounded-lg p-3 w-full border-gray-500 border-2 text-sm'>{message.content}</p>
                            </div>
                        ): (
                            <div className='flex gap-x-2'>
                                <div className='bg-teal-500 h-12 w-12 rounded-lg'>
                                    <svg className='w-full h-full text-white p-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M104 104h48v48h-48Zm136 48a8 8 0 0 1-8 8h-16v40a16 16 0 0 1-16 16h-40v16a8 8 0 0 1-16 0v-16h-32v16a8 8 0 0 1-16 0v-16H56a16 16 0 0 1-16-16v-40H24a8 8 0 0 1 0-16h16v-32H24a8 8 0 0 1 0-16h16V56a16 16 0 0 1 16-16h40V24a8 8 0 0 1 16 0v16h32V24a8 8 0 0 1 16 0v16h40a16 16 0 0 1 16 16v40h16a8 8 0 0 1 0 16h-16v32h16a8 8 0 0 1 8 8m-72-56a8 8 0 0 0-8-8H96a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8Z"/></svg>
                                </div>
                                <p className='rounded-lg p-3 w-full border-teal-500 border-2 text-sm'>{message.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        ) : (
            <div className='w-full flex justify-center pt-96'>
                <h1 className='font-bold lg:text-2xl text-xl'>
                    Please use the input field below ⬇️
                </h1>
            </div>
        )}
        <div ref={messageEndRef}>

        </div>
        <form onSubmit={handleSubmit} className='p-5 bottom-0 bg-neutral-800'>
            <div className='relative flex items-center'>
                <Textarea
                tabIndex={0} required
                rows={1}
                value={input}
                onChange={handleInputChange}
                autoFocus
                placeholder='Send message...'
                spellCheck={false}
                className='w-full focus:outline-none shadow-teal-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-600'
                />
                <button type='submit' className='absolute bg-teal-500 p-2 rounded-lg right-0 mr-5'>
                    <svg className='w-5 h-5 text-white' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12L3 20l3.563-8L3 4zM6.5 12H22"/></svg>
                </button>
            </div>
        </form>

    </div>
  )
}

export default ChatbotPage