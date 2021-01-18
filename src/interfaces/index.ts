import { google } from '@google-cloud/dialogflow/build/protos/protos'
import { Dispatch, SetStateAction } from 'react'
import { Conversation } from '../models/conversation'

export interface MessageBoxProps {
	chats: Conversation[]
}

export interface InputBoxProps {
	sendMessage: (text: string) => void
	inputState: string
	setInput: Dispatch<SetStateAction<string>>
}

export interface IChat {
	message: string
	type: string
	id: string | number
}

export interface ChatProps {
	chat: Conversation
}

export interface QueryProps {
	url: string
	queryParams: {
		text: string
	}
}

export type IContent = google.cloud.dialogflow.v2.Intent.IMessage
