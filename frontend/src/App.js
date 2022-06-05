// import { gql, useQuery } from '@apollo/client'
import React from 'react'

import GlobalStyle, { Page } from './globalStyles'

import Main from './components/Main'

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
      <Main />
    </Page>
  )
}

export default App
