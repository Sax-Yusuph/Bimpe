import { useState } from 'react'

import { Container } from '../components/Container'
// import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Header from '../components/Header'
import MessageBox from '../components/MessageBox'
import InputBox from '../components/InputBox'
import { testData } from '../mock/dats'
import { getMessageResponse } from '../functions/messenger'
import { QUERY_URL } from '../variables'
import { Conversation } from '../models/conversation'

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
  return (
    <Container height="100vh" overflow="hidden">
      <Header />
      <Container
        bg={'blue.800'}
        w="100vw"
        overflow="hidden"
        h="100vh"
        // px={1}
      >
        <MessageBox chats={chats} />
        <InputBox
          sendMessage={sendMessage}
          setInput={setInput}
          inputState={input}
        />
      </Container>

      {/* <DarkModeSwitch /> */}
    </Container>
  )
}
export default Index
