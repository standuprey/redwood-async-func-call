import { useLazyQuery } from '@apollo/client'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SOMETHING_QUERY = gql`
  query Something {
    something
  }
`

const HomePage = () => {
  const [something] = useLazyQuery(SOMETHING_QUERY, {
    onCompleted: () => {
      alert('Done')
    },
  })
  const callSomething = () => {
    something()
  }
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <button onClick={callSomething}>Something API Call</button>
    </>
  )
}

export default HomePage
