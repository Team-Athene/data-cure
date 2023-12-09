import { LhFile } from './api/LhFile'

const api = new LhFile()
const baseUrl = import.meta.env.VITE_API_URL
const format = 'json'

export const retriveJWT = async () => {
  const { jwt } = await api.lhFileControllerRetriveJwt({
    baseUrl,
    format,
  })
  return jwt
}

export const generateIPNS = async () => {
  const { ipnsName } = await api.lhFileControllerGenerateIpns({
    baseUrl,
    format,
  })
  return ipnsName
}

export const publishIPNSRecord = async (ipnsName: string, userCid: string) => {
  const res = await api.lhFileControllerPublishIpnsRecord(
    { ipnsName, userCid },
    {
      baseUrl,
      format,
    },
  )
  return res
}
