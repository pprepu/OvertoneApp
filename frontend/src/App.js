import { gql, useQuery } from '@apollo/client'

const query = gql`
query {
  searchCount
}
`

const App = () => {
  const result = useQuery(query)

  if (result.loading) {
    return <div>
      loading
    </div>
  }
  return (
    <div>
      gql
      searches: {result.data.searchCount}
    </div>
  )
}

export default App
