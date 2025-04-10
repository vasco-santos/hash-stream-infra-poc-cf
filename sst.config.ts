/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'hash-stream-server',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'cloudflare',
    }
  },
  async run() {
    const indexStoreBucket = new sst.cloudflare.Bucket('IndexStore')
    const packStoreBucket = new sst.cloudflare.Bucket('PackStore')
    const worker = new sst.cloudflare.Worker('Server', {
      handler: './src/index.ts',
      link: [indexStoreBucket, packStoreBucket],
      url: true,
      build: {
        minify: false,
      },
    })

    return {
      api: worker.url,
    }
  },
})
