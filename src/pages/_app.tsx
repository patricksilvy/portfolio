import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, Text} from '@chakra-ui/react'
import { M_PLUS_Rounded_1c } from '@next/font/google'

const m_plus_rounded_1c = M_PLUS_Rounded_1c({ 
  subsets: ['latin'], 
  weight: ['300', '500', '700']
})

const theme = extendTheme({
  fonts: {
    m_plus_rounded_1c: m_plus_rounded_1c.style.fontFamily,
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
