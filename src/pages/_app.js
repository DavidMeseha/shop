import { FilterStateProvider } from '@/context/filterProvider'
import { UserProvider } from '@/context/UserProvider'
import NavBar from '@/layouts/NavBar'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <FilterStateProvider>
        <nav><NavBar /></nav>
        <Component {...pageProps} />
      </FilterStateProvider>
    </UserProvider>
  )
}