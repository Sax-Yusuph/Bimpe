import { v4 as uuidv4 } from 'uuid'
import { IContent } from '../interfaces'

export class Conversation {
  readonly id: string
  readonly content: IContent
  readonly who: string

  constructor(c: IContent, w: string) {
    this.content = c
    this.who = w
    this.id = uuidv4()
  }
  // get Text() {
  // 	const data = this.content.text?.text
  // 	if (data?.length) {
  // 		return data[0]
  // 	} else {
  // 		return null
  // 	}
  // }
}
