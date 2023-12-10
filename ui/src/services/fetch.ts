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


export const migrateS3 = async (s3: {
  accessKeyId: string
  key: string
  region: string
  bucket: string
}) => {
  const res = await api.lhFileControllerMigrateS3(s3, {
    baseUrl,
    format,
  })
  return res
}
