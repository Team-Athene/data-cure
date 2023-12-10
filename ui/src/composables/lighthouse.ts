export const fetchJWT = async (address: string, signature: string) => {
  const { data } = await useFetch(
    'https://encryption.lighthouse.storage/api/message/get-jwt',
  )
    .post({
      address,
      signature,
    })
    .json()
  return data
}
