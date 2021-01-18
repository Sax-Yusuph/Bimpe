import type { NextApiRequest, NextApiResponse } from 'next'
import queryResponse from '../../../functions/Dialogflow'
import { Conversation } from '../../../models/conversation'
import { CUSTOM_ENV_ERROR_MESSAGE, ERROR_500 } from '../../../variables'

interface myNextApiRequest extends NextApiRequest {
  query: {
    text: string
  }
}

export default async function handler(
  req: myNextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const response = await queryResponse(req.body.text)

    if (response == null) {
      const customMessage = { text: { text: [CUSTOM_ENV_ERROR_MESSAGE] } }
      res.json(new Conversation(customMessage, 'bot'))
    }

    if (response && response.fulfillmentMessages) {
      const content = response.fulfillmentMessages[0]
      const results = new Conversation(content, 'bot')
      res.status(200).json(results)
    } else {
      throw new Error(ERROR_500)
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
}
