import { NextResponse } from 'next/server'

export const config = {
  matcher: [
    '/home-demo'
  ]
}

export default async function middleware (request) {
  if (request.nextUrl.pathname.startsWith('/home-demo')) {
    console.log('====================================');
    console.log('replace');
    console.log('====================================');
    // const res = NextResponse.redirect(new URL('/', request.url))
    // return res

    // Why? using fetch instead of axios here
    // => https://github.com/vercel/next.js/issues/30932
  }
  console.log('no replace');

  return NextResponse.next()
}
