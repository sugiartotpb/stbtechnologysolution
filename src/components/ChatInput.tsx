"use client"

import React, { FC, HTMLAttributes, useState, useContext } from 'react'
import { cn } from '@/lib/utils'
import TextAreaAutosize from 'react-textarea-autosize'
import { useMutation } from '@tanstack/react-query'
import { POST } from '@/app/api/route'
import { Message } from '@/lib/validators/message'
import { MessagesContext } from '@/context/message'
import { nanoid } from 'nanoid'
//import { api } from '@/app/api/message'

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput:FC<ChatInputProps> = ({ className, ...props }) => {
    const [input, setInput] = useState<string>('')
    const {
      messages
    } = useContext(MessagesContext)
    const {mutate: sendMessage, isPending} = useMutation({
      mutationKey: ['sendMessage'],
      mutationFn: async (_message: Message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: _message }),
      })

      return response.body
    },
      onSuccess: () => {
        console.log('success')
      }
    })
  return (
    <div {...props} className={cn('border-t border-zinc-300', className)}>
        <div className='relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none'>
            <TextAreaAutosize 
            rows={2}
            maxRows={4}
            value={input}
            autoFocus
            onKeyDown={(e) => {
              if(e.key === 'Enter' && !e.shiftKey){
                e.preventDefault()
                const message: Message = {
                  id:nanoid(),
                  isUserMessage: true,
                  text: input
                }
                sendMessage(message)
              }
            }}
            onChange={(e) => setInput(e.target.value)}
            placeholder='write a message...'
            className='peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-500 focus:ring-0 text-sm sm:leading-6'
            />
        </div>
    </div>
  )
}

export default ChatInput