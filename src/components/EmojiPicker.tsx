import { Box } from '@chakra-ui/react'

export default function EmojiPicker(): JSX.Element {
  return (
    <Box
      bg="blue.500"
      pos="absolute"
      h="120px"
      w="40px"
      left={5}
      bottom={12}
      rounded="lg"
      shadow="sm"
    >
      yo!
    </Box>
  )
}
