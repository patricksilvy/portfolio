import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@/components/Fonts'
import theme from '@/lib/theme'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
