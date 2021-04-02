import _ from 'lodash'

import React from 'react'
import Link from 'next/link'
import { Image } from 'react-bootstrap'
import { Box, Grid, makeStyles } from '@material-ui/core'
import NavigationButton from '../../molecules/NavigationButton'

const useStyles = makeStyles(() => ({
  box: {
    alignItems: 'center',
    margin: '1.25em 1.75em'
  },
  container: {
    backgroundColor: '#FAFAFA',
    boxShadow: '0 0.167em 0.167em rgba(0, 0, 0, 0.25)',
    marginBottom: '0.167em'
  },
  imageBox: {
    width: '7.5em',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}))

const PageNavigation = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.container} container>
      <Grid item xs={6}>
        <Box className={classes.box} display="flex" justifyContent="flex-start">
          <Box className={classes.imageBox}>
            <Link href="/">
              <Image fluid src="/logo1.png" />
            </Link>
          </Box>
          {_.map(['Projects', 'FAQ', 'About'], (text) => {
            const lowerCased = text.toLowerCase()
            return <NavigationButton key={`btn-${lowerCased}`} link={`/${lowerCased}`} text={text} />
          })}
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.box} display="flex" justifyContent="flex-end">
          {_.map(['Login', 'Register'], (text) => {
            const lowerCased = text.toLowerCase()
            return (
              <NavigationButton
                emphasized={text === 'Register'}
                key={`btn-${lowerCased}`}
                link={`/${lowerCased}`}
                text={text}
              />
            )
          })}
        </Box>
      </Grid>
    </Grid>
  )
}

export default PageNavigation
