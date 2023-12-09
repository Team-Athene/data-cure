import { acceptHMRUpdate, defineStore } from 'pinia'

type UserInfo =  {
    email: string;
    walletAddress: string;
}
export const useUserStore = defineStore('user', () => {

    const userInfo = ref<UserInfo>({email:'',walletAddress:''})

    function $reset() {
        userInfo.value = { email: '', walletAddress: '' };
    }

    return {
        userInfo,
        $reset
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))