import { storeToRefs } from 'pinia';

const { contracts } = storeToRefs(useWeb3Store())

export const uploadData = async (data: {userToken:number, cid: string}) => {
  const res = await contracts.value?.DataCureAccess.simulate('uploadData', data);
  console.log("🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:", res)
  return res;
}

export const grandAccess = async (data: {userToken:number, cid: string}) => {
    const res = await contracts.value?.DataCureAccess.simulate('grandAccess', data);
    console.log("🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:", res)
    return res;
  }

export const verifyAccess = async (data: {userToken:number, cid: string}) => {
    const res = await contracts.value?.DataCureAccess.read('verifyAccess', data);
    console.log("🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:", res)
    return res;
  }

export const isDoctor = async (data: {userToken:number, walletAddr: string}) => {
    const res = await contracts.value?.DataCureAccess.read('isDoctor', data);
    console.log("🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:", res)
    return res;
  }

export const addDoctorList = async (data: {orgTokenId:number, doctorWalletAddr: string}) => {
    const res = await contracts.value?.DataCureAccess.simulate('addDoctor', data);
    console.log("🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:", res)
    return res;
  }
