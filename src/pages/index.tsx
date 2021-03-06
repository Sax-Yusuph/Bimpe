import { useState } from 'react'

import { Container } from '../components/Container'
import ChartContainer from '../components/ChartContainer'
import Header from '../components/Header'
import MessageBox from '../components/Messages/MessageBox'
import InputBox from '../components/Input/InputBox'
import { testData } from '../mock/dats'
import { getMessageResponse } from '../functions/messenger'
import { QUERY_URL } from '../variables'
import { Conversation } from '../models/conversation'
import Meta from '../components/Meta'
import { Flex } from '@chakra-ui/react'
import { SendIconMessage } from '../interfaces'
import Icons from '../components/Input/Icons'

const Index = (): JSX.Element => {
  const [chats, setChats] = useState<Conversation[]>(testData)
  const [input, setInput] = useState('')

  const sendMessage = async (text: string) => {
    // @ step1
    // first display the user chat
    const mess = { text: { text: [text] } }
    const newChat = new Conversation(mess, 'user')
    setChats((prevChats) => [...prevChats, newChat])
    setInput('')

    // @step 2
    // go out and query the database
    const query = { url: QUERY_URL, queryParams: { text } }
    const response: Conversation = await getMessageResponse(query)
    // console.log(JSON.stringify(response, null, 2))
    setChats((prevChats) => [...prevChats, response])
  }

  const sendIconMessage: SendIconMessage = (icon) => {
    let mess = { text: { text: [icon] } }
    let newIconChat = new Conversation(mess, 'user')
    setChats((prevChats) => [...prevChats, newIconChat])

    // get random emoji
    const emojiIndex = Math.floor(Math.random() * Icons.length)
    mess = { text: { text: [Icons[emojiIndex]] } }
    newIconChat = new Conversation(mess, 'bot')
    setTimeout(() => {
      setChats((prevChats) => [...prevChats, newIconChat])
    }, 2000)
  }

  return (
    <Container height="100vh" overflow="hidden">
      <Meta />
      <Flex
        display={['none', null, 'none', 'block']}
        bg="#604580"
        backgroundImage="url(/headerbg.png)"
        height={'20vh'}
        w="100%"
        mb={'-35px'}
      />
      <ChartContainer>
        <Header />
        <Container
          bg={'#e5ddd5'}
          backgroundImage="url(/bg.png)"
          w="100%"
          overflow="hidden"
          h="100%"
          px={1}
        >
          <MessageBox chats={chats} />
          <InputBox
            sendMessage={sendMessage}
            setInput={setInput}
            inputState={input}
            sendIconMessage={sendIconMessage}
          />
        </Container>
      </ChartContainer>

      {/* <DarkModeSwitch /> */}
    </Container>
  )
}
export default Index
