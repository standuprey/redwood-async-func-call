export const schema = gql`
  type Query {
    something: Boolean! @skipAuth
  }
`
