import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Container from '@material-ui/core/Container';
import styled from 'styled-components'

import { withApollo } from '../lib/withApollo'
import Header from 'components/Navbar'
import Dashboard from 'components/Dashboard'
import GET_COVID_SUMMARY from 'queries/summary'

const StyledDiv = styled.body`
  background: #DEDEDE;
  margin: 0;
  padding: 0;
`

const Home = () => {
  const { loading, data, error } = useQuery(GET_COVID_SUMMARY)

  if (error || (loading && !data)) return null
  const { covid_totals } = data
  const summary = covid_totals[0]

  return (
    <StyledDiv>
      <Container>
        <Header date={summary.date} />
        <Dashboard summary={summary}  />
      </Container>
    </StyledDiv>
  )
}

export default withApollo(Home)
