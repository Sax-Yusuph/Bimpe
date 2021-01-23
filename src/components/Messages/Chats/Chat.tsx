import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ChatProps } from '../../../interfaces'
import Linkify from 'react-linkify'
import Callout from './Callout'

export default function Chat({ chat }: ChatProps): JSX.Element {
  const {
    who,
    content: { text },
  } = chat
  const data = text?.text
  const isUser = who == 'user'
  const currentBg = isUser ? '#dcf8c6' : '#f7fafc'

  return (
    <Flex justifyContent={isUser ? 'flex-end' : 'flex-start'} mt={2}>
      <Box
        as="span"
        shadow="lg"
        maxWidth="90%"
        bg={currentBg}
        rounded="lg"
        roundedTopLeft={isUser ? 'lg' : 0}
        roundedTopRight={isUser ? 0 : 'lg'}
        pos="relative"
        p={3}
      >
        <Callout isUser={isUser} currentBg={currentBg} />
        <Linkify>
          <Text color="gray.800">
            {data?.length ? data[0] : "something's not right"}
          </Text>
        </Linkify>
      </Box>
    </Flex>
  )
}
