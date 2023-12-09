import { acceptHMRUpdate, defineStore } from 'pinia'
import { WalletClient } from 'viem';
// import { ContractAddresses } from '~/utils/constants';

type UserInfo =  {
    email: string;
    walletAddress: string;
    network: string;
}
type Contract = {
    read: any;
    abi: any[];
    address: string;
    createEventFilter: any;
    estimateGas:any;
    getEvents:any;
    simulate: any;
    watchEvent:any;
}

type Contracts = {
    DataCure: Contract;
    DataCureAccess: Contract;
}
export const useWeb3Store = defineStore('web3', () => {

    const userInfo = ref<UserInfo>({ email: '', walletAddress: '', network:'0x13881'})
    const walletClient = shallowRef<WalletClient>()
    const contracts= shallowRef<Contracts>()


    function $reset() {
        userInfo.value = { email: '', walletAddress: '', network:'0x13881'};
    }

    return {
        userInfo,
        $reset,
        walletClient,
        contracts
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useWeb3Store as any, import.meta.hot))