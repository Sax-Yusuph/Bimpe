import { Box } from '@chakra-ui/react'
import React, { useRef, useEffect } from 'react'
import { MessageBoxProps } from '../../interfaces'
import Chat from './Chats/Chat'

export default function MessageBox({ chats }: MessageBoxProps): JSX.Element {
  const endMessageRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    scrollToBottom()
  }, [chats])

  const scrollToBottom = () => {
    endMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box
      flex={1}
      bg={'rgb(231, 232, 234)'}
      backgroundImage="url(/bg.png)"
      h="auto"
      w="100%"
      px={5}
      overflowY="auto"
    >
      {chats?.map((chat) => (
        <Chat key={chat.id} chat={chat} />
      ))}
      <div ref={endMessageRef} />
    </Box>
  )
}
