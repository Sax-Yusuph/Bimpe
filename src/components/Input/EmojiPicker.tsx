import { Box, SimpleGrid } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { SendIconMessage } from '../../interfaces'

import Icons from './Icons'

type EmojiProps = {
  sendIconMessage: SendIconMessage
  setShowEmoji: Dispatch<SetStateAction<boolean>>
}

export default function EmojiPicker({
  sendIconMessage,
  setShowEmoji,
}: EmojiProps): JSX.Element {
  return (
    <Box
      bg="gray.200"
      pos="absolute"
      w="70%"
      border="1px"
      borderColor="gray.500"
      left={0}
      bottom={12}
      rounded="lg"
      shadow="sm"
      overflowY="auto"
      p={4}
      style={{
        scrollbarColor: 'rgba(0, 0, 0, 0.2) hsla(0,0%,100%,.1)',
        scrollbarWidth: 'thin',
      }}
    >
      <SimpleGrid spacing={3} fontSize={20} minChildWidth="18px">
        {Icons &&
          Icons.map((icon: string, i) => {
            return (
              <Box
                key={i}
                rounded="full"
                cursor="pointer"
                onClick={() => {
                  setShowEmoji((prev) => !prev)
                  sendIconMessage(icon)
                }}
              >
                {icon}
              </Box>
            )
          })}
      </SimpleGrid>
    </Box>
  )
}
