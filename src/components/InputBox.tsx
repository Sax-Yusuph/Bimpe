import { Flex, HStack, IconButton, Input } from '@chakra-ui/react'
import { FormEvent } from 'react'
import { RiSendPlane2Line, RiUserSmileLine } from 'react-icons/ri'
import { InputBoxProps } from '../interfaces'

export default function InputBox({
	sendMessage,
	inputState,
	setInput,
}: InputBoxProps) {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		sendMessage(inputState)
	}
	return (
		<Flex p={3} bg='gray.500' w='100%' justifyContent='space-between'>
			<HStack flex={1} mx={3} bg='white' spacing={1} rounded='3xl'>
				<IconButton
					variant='ghost'
					rounded='3xl'
					aria-label='submit'
					icon={<RiUserSmileLine fontSize={24} />}
					_hover={{
						bg: 'transparent',
					}}
					_focus={{
						outline: 'none',
						bg: 'none',
					}}
					_selected={{
						bg: 'transparent',
					}}
				/>
				<form style={{ width: '100%' }} onSubmit={handleSubmit}>
					<Input
						rounded='3xl'
						variant='flush'
						placeholder='start texting'
						value={inputState}
						mr={3}
						size='lg'
						onChange={e => setInput(e.target.value)}
					/>
				</form>
			</HStack>
			<IconButton
				rounded='3xl'
				aria-label='submit'
				icon={<RiSendPlane2Line fontSize={18} />}
				boxSize={12}
				onClick={handleSubmit}
			/>
		</Flex>
	)
}
