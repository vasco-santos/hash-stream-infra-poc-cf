import { Resource } from 'sst'

// Streamer
import { HashStreamer } from '@hash-stream/streamer'

// Index
import { IndexReader } from '@hash-stream/index/reader'
import { CloudflareWorkerBucketIndexStore } from '@hash-stream/index/store/cf-worker-bucket'

// Pack
import { PackReader } from '@hash-stream/pack/reader'
import { CloudflareWorkerBucketPackStore } from '@hash-stream/pack/store/cf-worker-bucket'

export function getHashStreamer() {
  const indexStore = new CloudflareWorkerBucketIndexStore({
    bucket: Resource.IndexStore as any,
  })
  const packStore = new CloudflareWorkerBucketPackStore({
    bucket: Resource.PackStore as any,
  })

  const indexReader = new IndexReader(indexStore)
  const packReader = new PackReader(packStore)

  return new HashStreamer(indexReader, packReader)
}
