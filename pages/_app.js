/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/globalStyles'
const theme = {
  primary: 'green',
}

class App extends NextApp {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default App
