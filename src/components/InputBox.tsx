import { useState } from 'react'
import { Box, Flex, IconButton, Textarea } from '@chakra-ui/react'
import { FormEvent, MouseEvent } from 'react'
import { RiSendPlane2Line, RiUserSmileLine } from 'react-icons/ri'
import { InputBoxProps } from '../interfaces'
import EmojiPicker from './EmojiPicker'

export default function InputBox({
  sendMessage,
  inputState,
  setInput,
}: InputBoxProps): JSX.Element {
  const [showEmoji, setShowEmoji] = useState<boolean>(false)
  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    if (!inputState) return
    sendMessage(inputState)
  }
  return (
    <Flex
      p={2}
      bg="rgb(231, 232, 234)"
      backgroundImage="url(/bg.png)"
      w="100%"
      justifyContent="space-between"
    >
      <Flex
        flex={1}
        mx={2}
        my={1}
        alignItems="center"
        py={2}
        bg="white"
        rounded="2xl"
        pos="relative"
      >
        <IconButton
          variant="ghost"
          rounded="3xl"
          aria-label="submit"
          icon={<RiUserSmileLine fontSize={24} color="#718096" />}
          onClick={() => setShowEmoji(!showEmoji)}
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
        <Box flex={1} mr={2}>
          <form onSubmit={handleSubmit}>
            <Textarea
              cols={1}
              rows={1}
              color="black"
              rounded="lg"
              height="100%"
              variant="flush"
              resize="none"
              placeholder="start texting"
              value={inputState}
              mr={3}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </Box>
        <IconButton
          rounded="lg"
          aria-label="submit"
          mr={3}
          shadow="lg"
          bg="rgb(246,105,62)"
          icon={<RiSendPlane2Line fontSize={18} />}
          boxSize={12}
          onClick={handleSubmit}
          _hover={{
            bg: '#eb9a04',
            outline: 'none',
          }}
          _active={{
            outline: 'none',
            border: 'none',
          }}
          _focus={{
            outline: 'none',
            border: 'none',
          }}
        />{' '}
        {showEmoji && <EmojiPicker />}
      </Flex>
    </Flex>
  )
}
