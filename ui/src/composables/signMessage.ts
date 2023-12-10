import { getAuthMessage } from '@lighthouse-web3/sdk'

export const useSignMessage = async () => {
  if ((window as any).ethereum) {
    try {
      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (accounts.length === 0) {
        throw new Error('No accounts returned from Wallet.')
      }
      const signerAddress = accounts[0]
      const { message } = (await getAuthMessage(signerAddress)).data
      const signature = await (window as any).ethereum.request({
        method: 'personal_sign',
        params: [message, signerAddress],
      })
      return { signature: signature, address: signerAddress }
    } catch (err) {
      console.error('Error signing message with Wallet', err)
    }
  } else {
    console.log('Please install Wallet!')
  }
}
