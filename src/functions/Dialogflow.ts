import dialogflow from '@google-cloud/dialogflow'
import { v4 as uuidv4 } from 'uuid'

const sessionId = uuidv4()

export default async function queryResponse(query: string) {
	const sessionClient = new dialogflow.SessionsClient()
	const sessionPath = sessionClient.projectAgentSessionPath(
		process.env.GOOGLE_PROJECT_ID!,
		sessionId
	)

	const request = {
		session: sessionPath,
		queryInput: {
			text: {
				text: query,
				// The language used by the client (en-US)
				languageCode: process.env.DIALOGFLOW_SESSION_LANGUAGE_CODE,
			},
		},
	}

	const responses = await sessionClient.detectIntent(request)
	console.log('Detected intent')
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
