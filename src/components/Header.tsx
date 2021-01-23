import { Image, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Header(): JSX.Element {
  return (
    <Flex
      bg="rgb(118, 101, 160)"
      backgroundImage="url(/headerbg.png)"
      shadow="2xl"
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
        <VStack spacing={1} color="white" justifyItems="flex-start">
          <Text fontSize="lg" fontWeight="bold" textShadow="sm">
            Bimpe
          </Text>
          <Text
            fontSize="sm"
            mt={-5}
            ml={'-20px'}
            // fontWeight="bold"
            textShadow="sm"
          >
            online
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}
