import { FilterStateProvider } from '@/context/filterProvider'
import { SessionProvider } from 'next-auth/react'
import NavBar from '@/layouts/NavBar'
import '@/styles/globals.scss'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <FilterStateProvider>
      <SessionProvider session={session}>
        <nav><NavBar /></nav>
        <Component {...pageProps} />
      </SessionProvider>
    </FilterStateProvider>
  )
}