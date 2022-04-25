import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Next - Boilerplate</title>
        <meta
          name="description"
          content="A project starter to work with typescript, React, NextJS and Chakra UI"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
