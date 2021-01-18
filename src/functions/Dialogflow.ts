import dialogflow from '@google-cloud/dialogflow'
import { v4 as uuidv4 } from 'uuid'
import { QueryResponse } from '../interfaces'

const sessionId = uuidv4()
const config = {
  credentials: {
    private_key: process.env.GOOGLE_PRIVATE_KEY,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
  },
}

export default async function queryResponse(query: string): QueryResponse {
  const sessionClient = new dialogflow.SessionsClient(config)
  if (!process.env.GOOGLE_PROJECT_ID) return

  const sessionPath = sessionClient.projectAgentSessionPath(
    process.env.GOOGLE_PROJECT_ID,
    sessionId
  )

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        // The language used by the client (en-US)
        languageCode: process.env.GOOGLE_LANGUAGE_CODE,
      },
    },
  }

  const responses = await sessionClient.detectIntent(request)
  const result = responses[0].queryResult

  // console.log(`  Query: ${result?.queryText}`)
  // console.log(`  Response: ${result?.fulfillmentText}`)
  // if (result?.intent) {
  // 	console.log(`  Intent: ${result.intent.displayName}`)
  // } else {
  // 	console.log(`  No intent matched.`)
  // }
  return result
}
