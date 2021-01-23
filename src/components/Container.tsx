import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps): JSX.Element => {
  const { colorMode } = useColorMode()

  const bgColor = { light: '#f0f0f0', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
