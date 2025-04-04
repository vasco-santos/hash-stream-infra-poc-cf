import { IRequest, RequestHandler } from 'itty-router'
import { http } from '@hash-stream/utils/trustless-ipfs-gateway'

import { getHashStreamer } from '../lib'

// we define our environment
export type Environment = {}

// and now both args combined (that Workers send to the .fetch())
export type CFArgs = [Environment, ExecutionContext]

/**
 * Get content as IPFS trustless gateway response.
 */
export const ipfsGet: RequestHandler<IRequest, CFArgs> = (request) => {
  const hashStreamer = getHashStreamer()
  return http.httpipfsGet(request, { hashStreamer })
}
