import { Avatar, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
	return (
		<Flex
			bg='#4e8cff'
			// boxShadow='0 1px 4px rgba(0,0,0,.2)'
			shadow='md'
			w='100%'
			p={10}
			py={3}
			pos='fixed'
		>
			<HStack spacing={3}>
				<Avatar src='' alt='bot' />
				<VStack spacing={1}>
					<Text fontSize='lg'>Bimpe</Text>
					<Text fontSize='sm'>online</Text>
				</VStack>
			</HStack>
		</Flex>
	)
}
