import { Hono } from 'hono'
import { http } from '@hash-stream/utils/trustless-ipfs-gateway'

import { getHashStreamer } from './lib'

const app = new Hono().get('/ipfs/:cid', async (c) => {
  const hashStreamer = getHashStreamer()
  return http.httpipfsGet(c.req.raw, { hashStreamer })
})

export default app
