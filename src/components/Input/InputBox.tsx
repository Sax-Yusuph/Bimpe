import { useState } from 'react'
import { Box, Flex, IconButton, Input } from '@chakra-ui/react'
import { FormEvent, MouseEvent } from 'react'
import { RiSendPlane2Line, RiUserSmileLine } from 'react-icons/ri'
import { InputBoxProps } from '../../interfaces'
import EmojiPicker from './EmojiPicker'

export default function InputBox({
  sendMessage,
  sendIconMessage,
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
    <Flex p={2} w="100%" justifyContent="space-between">
      <Flex
        flex={1}
        mx={2}
        my={1}
        alignItems="center"
        py={2}
        bg="white"
        rounded="lg"
        pos="relative"
      >
        <IconButton
          variant="ghost"
          rounded="full"
          ml={2}
          aria-label="submit"
          icon={<RiUserSmileLine size={'1.3rem'} color="#718096" />}
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
            <Input
              // ref={ref}
              // cols={1}
              // rows={1}
              color="black"
              rounded="lg"
              height="100%"
              variant="flush"
              resize="none"
              value={inputState}
              mx={3}
              p={0}
              autoFocus={true}
              onChange={(e) => setInput(e.target.value)}
              // onKeyUp={(e) => {
              //   if (e.key == 'Enter') {
              //     sendMessage(inputState)
              //   }
              // }}
            />
          </form>
        </Box>
        <IconButton
          rounded="lg"
          aria-label="submit"
          mr={2}
          shadow="lg"
          bg="rgb(246, 105, 62)"
          icon={<RiSendPlane2Line fontSize={16} color="#fff" />}
          // boxSize={12}
          onClick={handleSubmit}
          transition="0.3s"
          _hover={{
            bg: '#5a4886',
            outline: 'none',
            transform: 'scale(0.9)',
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
        {showEmoji && (
          <EmojiPicker
            sendIconMessage={sendIconMessage}
            setShowEmoji={setShowEmoji}
          />
        )}
      </Flex>
    </Flex>
  )
}
