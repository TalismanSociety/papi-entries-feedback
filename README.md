# papi-entries-feedback

Minimal reproduction of https://github.com/paritytech/polkadot-sdk/issues/5589

## Repo Creation Steps

> NOTE: Please run `bun upgrade` before you execute these tests locally.  
> Even a bun version as recent as v1.1.3 will throw `No response received from RPC endpoint in 60s` errors.

```
bun init # using bun v1.1.26
bun add polkadot-api
bun add @polkadot/api
bun x papi add dot -n polkadot
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run test:all
```

Log to results.log:

```bash
bun run test:all >results.log 2>&1
```
