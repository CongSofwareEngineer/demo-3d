import { encryptData } from '@/utils/crypto'

export async function POST (req, res) {
  try {
    const dataApi = { name: 'server' }
    const dataEncode = encryptData(dataApi, process.env.NEXT_PUBLIC_KEY_ENCODE)
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
