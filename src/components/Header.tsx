import {
  Image,
  Flex,
  HStack,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'

export default function Header(): JSX.Element {
  const isLargeScreen = useBreakpointValue({ xl: true })
  return (
    <Flex
      bg={isLargeScreen ? 'rgb(187, 187, 187)' : '#604580'}
      backgroundImage={isLargeScreen ? undefined : 'url(/headerbg.png)'}
      shadow="2xl"
      w="100%"
      p={4}
      py={1}
      pos="static"
    >
      <HStack spacing={3}>
        {/* <Avatar src="/bimpe.png" alt="bot" /> */}
        <Image
          src="/bimpe.png"
          boxSize="64px"
          objectFit="contain"
          borderRadius="full"
        />
        <VStack
          spacing={'-5px'}
          color={isLargeScreen ? 'gray.700' : 'white'}
          justifyItems="flex-start"
        >
          <Text fontSize="lg" fontWeight="bold" textShadow="sm">
            Bimpe
          </Text>
          <Text fontSize="sm" textShadow="sm">
            online
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}
