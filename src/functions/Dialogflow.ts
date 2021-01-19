import dialogflow from '@google-cloud/dialogflow'
import { v4 as uuidv4 } from 'uuid'
import { QueryResponse } from '../interfaces'

const sessionId = uuidv4()
// // parse google credentials
// const { privateKey } = JSON.parse(
//   process.env.GOOGLE_PRIVATE_KEY || '{ "privateKey": null }'
// )
const cred = process.env.GOOGLE_APPLICATION_CREDENTIALS
const credentials = cred && JSON.parse(Buffer.from(cred, 'base64').toString())

export default async function queryResponse(query: string): QueryResponse {
  const sessionClient = new dialogflow.SessionsClient({ credentials })
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
        languageCode: 'en',
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
