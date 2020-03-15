import gql from 'graphql-tag'

const GET_COVID_STATS = gql`
  query get_covid_stats {
    covid_stats {
      ID
      state
      confirmed_local
      confirmed_overseas
      recovered
      death
    }
  }
`

export default GET_COVID_STATS
