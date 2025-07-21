import { NextApiRequest, NextApiResponse } from 'next'
import config from 'config'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${config.lastfm}&api_key=${config.lastfmKEY}&format=json`)
  const data = await response.json()
  res.status(200).json(data)
}
