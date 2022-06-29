// import { gql, useQuery } from '@apollo/client'
import React from 'react'

import GlobalStyle, { Page } from './globalStyles'

import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import(/* webpackPreload: true */ './fonts/Roboto-Light-webfont.woff')

// const query = gql`
// query {
//   searchCount
// }
// `

const App = () => {
  // const result = useQuery(query)

  // if (result.loading) {
  //   return <div>
  //     loading
  //   </div>
  // }
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
