import { dot } from '@polkadot-api/descriptors'
import { createClient } from 'polkadot-api'
import { getWsProvider } from 'polkadot-api/ws-provider/web'

const rpcUrl = 'wss://rpc.ibp.network/polkadot'

console.time('Get entries')
const client = createClient(getWsProvider(rpcUrl))
const api = client.getTypedApi(dot)
try {
  const result = await api.query.NominationPools.PoolMembers.getEntries()
  console.timeEnd('Get entries')

  console.log(result)
} finally {
  client.destroy()
}
