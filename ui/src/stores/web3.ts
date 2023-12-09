import { acceptHMRUpdate, defineStore } from 'pinia'
import { WalletClient } from 'viem';
import { ContractAddresses } from '~/utils/constants';

type UserInfo =  {
    email: string;
    walletAddress: string;
    network: string;
}
type ContractAddress = {
    DataCure: string;
}
export const useWeb3Store = defineStore('web3', () => {

    const userInfo = ref<UserInfo>({ email: '', walletAddress: '', network:'0x13881'})
    const walletClient = shallowRef<WalletClient>()
    const contractAddress = shallowRef<ContractAddress>({ DataCure: ContractAddresses.DataCure[userInfo.value.network]})


    function $reset() {
        userInfo.value = { email: '', walletAddress: '', network:'0x13881'};
    }

    return {
        userInfo,
        $reset,
        walletClient,
        contractAddress
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useWeb3Store as any, import.meta.hot))