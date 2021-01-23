import {
  Flex,
  useColorMode,
  FlexProps,
  useBreakpointValue,
} from '@chakra-ui/react'

const ChartContainer = (props: FlexProps): JSX.Element => {
  const isLargeScreen = useBreakpointValue({ xl: true })
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  const largeScreenProps = isLargeScreen
    ? {
        borderBottom: '10px solid',
        borderBottomColor: '#7665a0 ',
        mt: '-50px',
        shadow: '2xl',
      }
    : {}

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
      w={['100%', null, '100%', '80%']}
      h={['100vh', null, '100vh', 'auto']}
      overflow="hidden"
      borderRadius={[0, null, null, 'md']}
      mt={largeScreenProps?.mt}
      borderBottom={largeScreenProps?.borderBottom}
      borderBottomColor={largeScreenProps?.borderBottomColor}
      shadow={largeScreenProps.shadow}
      pos="relative"
    />
  )
}

export default ChartContainer
