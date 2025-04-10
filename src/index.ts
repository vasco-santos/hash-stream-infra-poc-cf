import { Resource } from 'sst'

import { AutoRouter, withParams, error, cors } from 'itty-router'

import { ipfsGet } from './routes/ipfs'
import { versionGet } from './routes/version'

// get preflight and corsify pair
const { preflight, corsify } = cors()

const router = AutoRouter({
  before: [preflight], // add preflight upstream
  finally: [corsify], // and corsify downstream
})

router
  .all('*', withParams) // upstream middleware
  .get('/version', versionGet)
  .get('/ipfs/:cid', ipfsGet)

export default {
  async fetch(request: Request, ...args: any[]) {
    return router.fetch(request, ...args).catch(error)
  },
}
