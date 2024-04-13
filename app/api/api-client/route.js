import { decryptData, encryptData } from '@/utils/crypto'

export async function POST (req, res) {
  try {
    const dataReq = await req.json()

    let dataReqClient = dataReq?.data

    if (typeof dataReqClient === 'string') {
      dataReqClient = decryptData(dataReqClient, process.env.NEXT_PUBLIC_KEY_ENCODE)
      dataReqClient = JSON.parse(dataReqClient)
    }

    let dataEncode = { name: 'server' }
    if (dataReqClient?.isEncode) {
      dataEncode = encryptData(JSON.stringify(dataEncode), process.env.NEXT_PUBLIC_KEY_ENCODE)
    }
    console.log({ dataEncode })
    return Response.json({
      data: dataEncode,
      message: 'success'
    })
  } catch (error) {
    return Response.json(
      {
        data: null,
        message: 'bad request',
        error: 'You are hacker'
      },
      {
        status: 500
      }
    )
  }
}
