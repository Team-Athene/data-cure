import { defineConfig } from '@wagmi/cli'
import { actions } from '@wagmi/cli/plugins'
import * as DataCure from "../../smart-contract/artifacts/contracts/DataCure.sol/DataCure.json";
export default defineConfig({
  out: 'src/index.ts',
  contracts: [{
    name: DataCure.contractName,
    abi: DataCure.abi as any,
  },],
 plugins: [
    actions({readContract: true, prepareWriteContract: true, watchContractEvent: true}),
  ],
})
