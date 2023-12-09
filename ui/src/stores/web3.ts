import { acceptHMRUpdate, defineStore } from 'pinia'
import { WalletClient, GetContractReturnType,PublicClient } from 'viem';
import type { Abi,PublicClient,WalletClient as TWalletClient,Address } from 'viem';
// import { ContractAddresses } from '~/utils/constants';

type UserInfo =  {
    email: string;
    walletAddress: string;
    network: string;
    SbtId: number;
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
    write:any;
}

type Contracts = {
    DataCure: Contract;
}
export const useWeb3Store = defineStore('web3', () => {

    const userInfo = ref<UserInfo>({ email: '', walletAddress: '', network:'0x13881', SbtId: 0})
    const walletClient = shallowRef<WalletClient>()
    const publicClient = shallowRef<PublicClient>()
    const contracts= shallowRef<Contracts>()


    function $reset() {
        userInfo.value = { email: '', walletAddress: '', network: '0x13881', SbtId: 0 };
    }

    return {
        userInfo,
        $reset,
        walletClient,
        contracts,
        publicClient
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useWeb3Store as any, import.meta.hot))