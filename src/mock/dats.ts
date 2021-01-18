import { Conversation } from '../models/conversation'

const data = [
  { message: { text: { text: ['hi User'] } }, who: 'bot' },
  { message: { text: { text: ['Hey! How are you'] } }, who: 'user' },
  { message: { text: { text: ['I am fine, How about you'] } }, who: 'bot' },
  {
    message: { text: { text: ['I am good too, Whats your name'] } },
    who: 'user',
  },
  { message: { text: { text: ['my name is Bimpe'] } }, who: 'bot' },
  { message: { text: { text: ['tell me about you'] } }, who: 'user' },
  {
    message: { text: { text: ['i am Bimpe, your virtual assistant'] } },
    who: 'bot',
  },
]

export const testData = data.map((item) => {
  return new Conversation(item.message, item.who)
})
