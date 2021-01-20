import { Image, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Header(): JSX.Element {
  return (
    <Flex
      bg="#00adbc"
      backgroundImage="url(/headerbg.png)"
      shadow="md"
      w="100%"
      p={5}
      py={2}
    >
      <HStack spacing={3}>
        {/* <Avatar src="/bimpe.png" alt="bot" /> */}
        <Image
          src="/bimpe.png"
          boxSize="64px"
          objectFit="contain"
          borderRadius="full"
        />
        <VStack spacing={1} color="white">
          <Text fontSize="lg">Bimpe</Text>
          <Text fontSize="sm">online</Text>
        </VStack>
      </HStack>
    </Flex>
  )
}
