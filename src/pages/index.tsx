import { useState, useEffect } from 'react'

import { Container } from '../components/Container'
// import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Header from '../components/Header'
import MessageBox from '../components/MessageBox'
import InputBox from '../components/InputBox'
import { testData } from '../mock/dats'
import { getMessageResponse } from '../functions/messenger'
import { QUERY_URL } from '../variables'
import { Conversation } from '../models/conversation'

const Index = () => {
	const [chats, setChats] = useState<Conversation[]>(testData)
	const [input, setInput] = useState('')

	const sendMessage = async (text: string) => {
		// @ step1
		// first display the user chat
		let mess = { text: { text: [text] } }
		const newChat = new Conversation(mess, 'user')
		console.log(JSON.stringify(newChat, null, 2))
		console.log(`user: ${newChat.Text}`)
		setChats(prevChats => [...prevChats, newChat])
		setInput('')

		// @step 2
		// go out and query the database
		const query = { url: QUERY_URL, queryParams: { text } }
		const response: Conversation = await getMessageResponse(query)
		console.log(JSON.stringify(response, null, 2))
		console.log(
			`${JSON.stringify(response.content.text, null, 2)}: ${response.Text}`
		)
		setChats(prevChats => [...prevChats, response])
	}
	return (
		<Container height='100vh'>
			<Header />
			<Container bg={'blue.800'} w='100%' h='100%'>
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
