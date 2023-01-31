import { Box, Container, Grid,  } from '@mui/material'
import React from 'react'
import { Colors } from '../constants/Colors'
import Navbar from './Navbar'
import PageTitle from './PageTitle'
import {makeStyles} from 'tss-react/mui'
import { useRouter } from 'next/router'
import Head from 'next/head'

const SecondaryLayout = ({
  children
}:{
  children: React.ReactElement
}) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <>
    <Head>
    <title>Portfolio</title>
    </Head>
    <Grid container
    className={classes.secondaryLayoutContainer}
    >
      <Grid item container
      className={classes.secondaryLayoutInnerContainer}
      >
        <Box className={classes.headerContainer}>
          <PageTitle title={router.pathname} className={classes.pageTitlePositioning}/>
          <Navbar className={classes.navbarPositioning}/>
        </Box>
        <Box className={classes.bodyContainer}>
          {children}
        </Box>
      </Grid>
    </Grid>
    </>
  )
}


const useStyles = makeStyles()((theme) => ({
  secondaryLayoutContainer:{
    [theme.breakpoints.up('lg')]:{
    backgroundColor:Colors.darkPurple,
    height: '100vh',
    padding: '1.25rem',
    // '@media(min-height: 100vh)': {
    //   height: '100%',
    // }
    }
  },
  secondaryLayoutInnerContainer:{
    backgroundColor: Colors.white,
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    padding: '1.5rem',
    borderRadius: '1.5rem',
  },
  headerContainer:{
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
  },
  pageTitlePositioning:{
    flexBasis: '20%',
  },
  navbarPositioning:{
    flexBasis: '72.5%',
  },
  bodyContainer:{
    flexBasis:'100%',
    backgroundColor: Colors.midPurple,
    borderRadius: '1rem',
  }
}));


export default SecondaryLayout