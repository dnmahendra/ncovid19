import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useQuery } from 'react-apollo'

import { withApollo } from '../lib/withApollo'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: #f2f2f2;
`

const Home = () => {
  const classes = useStyles()

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div>nCovid-19 updates</div>
        </Grid>
      </form>
    </Container>
  )
}

export default withApollo(Home)
