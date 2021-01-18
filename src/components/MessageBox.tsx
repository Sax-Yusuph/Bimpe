import { Box } from '@chakra-ui/react'
import React from 'react'
import { MessageBoxProps } from '../interfaces'
import Chat from './Chat'

export default function MessageBox({ chats }: MessageBoxProps): JSX.Element {
  return (
    <Box bg={'gray.50'} w="100%" h="100%" px={10} pt={5}>
      {chats?.map((chat) => (
        <Chat key={chat.id} chat={chat} />
      ))}
    </Box>
  )
}
