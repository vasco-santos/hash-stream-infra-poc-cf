# hash-stream-infra-poc-cf

Infra deployment PoC for [hash-stream] Server implementing the IPFS Trustless Gateway](https://specs.ipfs.tech/http-gateways/trustless-gateway/) built on [SST] for Cloudflare deployments.

## Getting Started

The repo contains the infra deployment code that can be deployed to run an [IPFS Trustless Gateway](https://specs.ipfs.tech/http-gateways/trustless-gateway/) relying on [hash-stream]..

To work on this codebase **you need**:

- Node.js >= v18 (prod env is node v18)
- A Cloudlfare account setup
- Copy `.env.tpl` to `.env` and fill it in
- Install the deps with `pnpm i`

---

### Requirements

To work on this codebase, make sure you have:

- **Node.js >= v18** (production environment runs Node v18)
- Cloudflare R2 account activated

---

### Development Server

To start a development/testing server:

Deploy dev services to your Cloudflare account and start dev console

```sh
$ npx sst dev
```

## Deployment

Deploy production services to your Cloudflare account:

```console
npx sst deploy --stage production
```

See: https://docs.sst.dev for more info on how to get production infrastructure deployed.

## Server Setup

The server exposes the following endpoint following the [IPFS Trustless Gateway Spec](https://specs.ipfs.tech/http-gateways/trustless-gateway/):

- `GET /ipfs/:cid` – Serves verifiable content associated with a multihash using the [hash-stream] building Blobs under the hood.

The configured store path MUST contains valid `pack` and `index` data for it to respond to requests correctly.

### ⚙️ Query Parameters & Headers

The request **must specify the desired response format** using one of:

#### ✅ Accept Header (preferred)

```http
Accept: application/vnd.ipld.raw
Accept: application/vnd.ipld.car
```

#### ✅ `format` Query Parameter (optional alternative)

```http
/ipfs/:cid?format=raw
/ipfs/:cid?format=car
```

Supported formats:

| Format | Description                             |
| ------ | --------------------------------------- |
| `raw`  | Outputs the raw block bytes             |
| `car`  | Outputs a CAR file containing the block |

> Note: For compatibility, requests **without a valid format header or query param will be rejected or return an empty response**.

---

### 🚀 Example Request

```bash
curl -i -H "Accept: application/vnd.ipld.raw" http://localhost:3000/ipfs/bafkqaaa
```

or

```bash
curl -i "http://localhost:3000/ipfs/bafkqaaa?format=raw"
```

---

[SST]: https://sst.dev
[seed.run]: https://seed.run
[hash-stream]: https://github.com/vasco-santos/hash-stream
