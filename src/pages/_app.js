import { FilterStateProvider } from '@/context/filterProvider'
import { SessionProvider } from 'next-auth/react'
import NavBar from '@/layouts/NavBar'
import '@/styles/globals.scss'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <FilterStateProvider>
        <nav><NavBar /></nav>
        <Component {...pageProps} />
      </FilterStateProvider>
    </SessionProvider>
  )
}