import { storeToRefs } from 'pinia'
import { formatUnits } from 'viem'
import { hashEmail } from './email-hash.service'
const { contracts } = storeToRefs(useWeb3Store())

function removeZeros(str) {
  // Remove '0x' and leading zeros using a regular expression.
  // ^0x matches the '0x' at the start of the string.
  // 0+ matches one or more zeros following '0x'.
  return str.replace(/^0x0+/, '')
}

export const grandAccess = async (data: { userToken: number; cid: string }) => {
    const res = await contracts.value?.DataCureAccess.write.grandAccess([
      data.userToken,
      data.cid,
    ])
    console.log('🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:', res)
    return res
}

export const verifyAccess = async (data: {
  userToken: number
  cid: string
}) => {
  const res = await contracts.value?.DataCureAccess.read('verifyAccess', data)
  console.log('🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:', res)
  return res
}

export const getUserTokenFromEmailHash = async (data: { email: string }) => {
  const hash = hashEmail(data.email)
  const res = await contracts.value?.DataCure.read.userToken([hash])
  const tokenNumber = +formatUnits(res, 0)
  return tokenNumber
}

export const getUserTokenDetails = async (data: { userToken: number }) => {
  const res = await contracts.value?.DataCure.read.userTokenDetails([
    data.userToken,
  ])
  const ipns = removeZeros(res[1])
  return ipns
}
export const isDoctor = async (data: {
  userToken: number
  walletAddr: string
}) => {
  const res = await contracts.value?.DataCureAccess.read('isDoctor', data)
  console.log('🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:', res)
  return res
}

export const getDoctorList = async (data: { orgTokenId: number }) => {
  const res = await contracts.value?.DataCureAccess.read.getDoctorsList([
    data.orgTokenId
  ])
  console.log('🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:', res)
  return res
}

export const addDoctorList = async (data: {
  orgTokenId: number
  doctorWalletAddr: string
}) => {
  const res = await contracts.value?.DataCureAccess.write.addDoctor([
    data.orgTokenId,
    data.doctorWalletAddr,
  ])
  console.log('🚀 ~ file: web3.service.ts:9 ~ uploadData ~ res:', res)
  return res
}

export const uploadData = async (data: {
  userToken: number
  cid: string
  list: boolean
}) => {
  const res = await contracts.value?.DataCureAccess.write.uploadData([
    data.userToken,
    data.cid,
    data.list,
  ])
  return res
}
