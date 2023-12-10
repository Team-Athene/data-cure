import { acceptHMRUpdate, defineStore } from 'pinia'


export const useWakuStore = defineStore('waku', () => {

    const messages = ref<any[]>([])

    return {
        messages,
        useWakuVerification
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useWakuStore as any, import.meta.hot))