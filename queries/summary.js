import gql from 'graphql-tag'

const GET_COVID_SUMMARY = gql`
  query get_covid_summary {
    covid_totals {
      data {
        date
        total_screened
        total_confirmed
      }
    }
  }
`

export default GET_SUMMARY
