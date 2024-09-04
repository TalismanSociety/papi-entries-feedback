# papi-entries-feedback

## Repo Creation Steps

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
