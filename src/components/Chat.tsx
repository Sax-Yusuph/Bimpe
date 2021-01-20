import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ChatProps } from '../interfaces'
import Linkify from 'react-linkify'

export default function Chat({ chat }: ChatProps): JSX.Element {
  const {
    who,
    content: { text },
  } = chat
  const data = text?.text
  return (
    <Flex justifyContent={who == 'user' ? 'flex-end' : 'flex-start'} mt={2}>
      <Box
        shadow="lg"
        maxWidth="70%"
        bg={who == 'user' ? '#dcf8c6' : 'gray.50'}
        rounded="xl"
        roundedTopLeft={who == 'user' ? 'xl' : 0}
        roundedTopRight={who == 'user' ? 0 : 'xl'}
        w=""
        p={3}
      >
        <Linkify>
          <Text color="gray.800">
            {data?.length ? data[0] : "something's not right"}
          </Text>
        </Linkify>
      </Box>
    </Flex>
  )
}
