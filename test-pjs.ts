import { ApiPromise, WsProvider } from '@polkadot/api'

const rpcUrl = 'wss://rpc.ibp.network/polkadot'

console.time('Get entries')
const api = new ApiPromise({ provider: new WsProvider(rpcUrl) })
try {
  await api.isReadyOrError
  const result = await api.query.nominationPools.poolMembers.entries()
  console.timeEnd('Get entries')

  console.log(result.map(([keyArgs, value]) => ({ keyArgs, value: value.toHuman() })))
} finally {
  await api.disconnect()
}
