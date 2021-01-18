import type { NextApiRequest, NextApiResponse } from 'next'
import queryResponse from '../../../functions/Dialogflow'
import { Conversation } from '../../../models/conversation'
import { ERROR_500 } from '../../../variables'

interface myNextApiRequest extends NextApiRequest {
	query: {
		text: string
	}
}

export default async function handler(
	req: myNextApiRequest,
	res: NextApiResponse
) {
	// console.log(req.body.text)
	try {
		const response = await queryResponse(req.body.text)
		if (response && response.fulfillmentMessages) {
			const content = response.fulfillmentMessages[0]

			const results = new Conversation(content, 'bot')
			console.log(results.Text)
			res.status(200).json(results)
		} else {
			throw new Error(ERROR_500)
		}
	} catch (error) {
		res.status(500).json(error.message)
	}
}
