import gql from 'graphql-tag'

const GET_COVID_SUMMARY = gql`
  query get_covid_summary {
    covid_totals {
      date
      total_screened
      total_confirmed
      total_deaths
    }
  }
`

export default GET_COVID_SUMMARY
