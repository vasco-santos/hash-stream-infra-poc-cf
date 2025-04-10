# hash-stream-infra-poc-cf

Hash Stream infra deployment PoC for [hash-stream] built on [SST] for Cloudflare deployments.

## Getting Started

The repo contains the infra deployment code.

To work on this codebase **you need**:

- Node.js >= v18 (prod env is node v18)
- A Cloudlfare account setup
- Copy `.env.tpl` to `.env` and fill it in
- Install the deps with `pnpm i`

Deploy dev services to your Cloudflare account and start dev console

```console
npx sst dev
```

See: https://docs.sst.dev for more info on how things get deployed.

## Deployment

Deploy production services to your Cloudflare account:

```console
npx sst deploy --stage production
```

[SST]: https://sst.dev
[seed.run]: https://seed.run
[hash-stream]: https://github.com/vasco-santos/hash-stream
