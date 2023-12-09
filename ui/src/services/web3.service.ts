import { storeToRefs } from 'pinia';

const { contracts } = storeToRefs(useWeb3Store())

export const uploadData = async (data: {userToken:number, cid: string}) => {
  const res = await contracts.value?.DataCureAccess.simulate('uploadData', data);
  console.log("🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:", res)
  return res;
}

