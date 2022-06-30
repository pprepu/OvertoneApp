import React from 'react'

import GlobalStyle, { Page } from './globalStyles'

import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import(/* webpackPreload: true */ './fonts/Roboto-Light-webfont.woff')

const App = () => {
  return (
    <Page>
      <GlobalStyle />
      <Navbar />
      <Main />
      <Footer />
    </Page>
  )
}

export default App