import axios from 'axios'
import { QueryProps } from '../interfaces'

export const getMessageResponse = async (params: QueryProps): Promise<any> => {
  const { url, queryParams } = params
  const res = await axios.post(url, queryParams)
  return res.data
}
