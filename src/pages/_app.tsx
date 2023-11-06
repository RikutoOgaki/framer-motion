import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  )
}
