// import { google } from 'googleapis'

class GoogleService {
  // static async createAuth () {
  //   const auth = new google.auth.GoogleAuth({
  //     // keyFilename: 'path/to/your/credentials.json', // Or set GOOGLE_APPLICATION_CREDENTIALS environment variable
  //     keyFilename: process.env.NEXT_PUBLIC_API_KEY_YOUTUBE, // Or set GOOGLE_APPLICATION_CREDENTIALS environment variable
  //     scopes: [process.env.NEXT_PUBLIC_SCOPES_YOUTUBE]
  //   })
  //   return auth
  // }

  // static async createYoutube () {
  //   const auth = await this.createAuth()
  //   const youtube = google.youtube({
  //     version: 'v3',
  //     auth: await auth.getClient()
  //   })
  //   return youtube
  // }

  // static async uploadVideoInYoutube ({
  //   fileUpload = null,
  //   nameFile = null,
  //   desFile = null
  // }) {
  //   try {
  //     if (!fileUpload) {
  //       return null
  //     }
  //     const youtube = await this.createYoutube()
  //     const res = await youtube.videos.insert({
  //       part: 'snippet',
  //       requestBody: {
  //         snippet: {
  //           title: nameFile || 'My Uploaded Video',
  //           description: desFile || 'Description of my video'
  //         }
  //       },
  //       media: {
  //         body: fileUpload
  //       }
  //     })
  //     console.log({ res })
  //     return res
  //   } catch (error) {
  //     console.log('error uploadVideoInYoutube', error)
  //     return null
  //   }
  // }
}
export default GoogleService
