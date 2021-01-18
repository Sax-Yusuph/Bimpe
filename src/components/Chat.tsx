import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ChatProps } from '../interfaces'

export default function Chat({ chat }: ChatProps): JSX.Element {
  const {
    who,
    content: { text },
  } = chat
  const data = text?.text
  return (
    <Flex justifyContent={who == 'user' ? 'flex-end' : 'flex-start'} mb={1}>
      <Box
        shadow="lg"
        maxWidth="70%"
        bg={who == 'question' ? '#dcf8c6' : 'gray.50'}
        rounded="md"
        w=""
        p={3}
      >
        <Text color="gray.800">
          {data?.length ? data[0] : "something's not right"}
        </Text>
      </Box>
    </Flex>
  )
}
