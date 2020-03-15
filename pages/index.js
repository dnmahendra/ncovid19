import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { withApollo } from '../lib/withApollo'
import Header from 'components/Navbar'
import Dashboard from 'components/Dashboard'
import GET_COVID_SUMMARY from 'queries/summary'

const Home = () => {
  const { loading, data, error } = useQuery(GET_COVID_SUMMARY)

  if (error || (loading && !data)) return null
  const { covid_totals } = data
  const summary = covid_totals[0]

  return (
    <div>
      <Header date={summary.date} />
      <Dashboard summary={summary}  />
    </div>
  )
}

export default withApollo(Home)
