import { Box, Container,  } from '@mui/material'
import React from 'react'
import { Colors } from '../constants/Colors'
import Navbar from './Navbar'
import PageTitle from './PageTitle'
import {makeStyles} from 'tss-react/mui'
import { useRouter } from 'next/router'

const SecondaryLayout = ({
  children
}:{
  children: React.ReactElement
}) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Box
    className={classes.secondaryLayoutContainer}
    >
      <Box
      className={classes.secondaryLayoutInnerContainer}
      >
        <Box className={classes.headerContainer}>
          <PageTitle title={router.pathname} className={classes.pageTitlePositioning}/>
          <Navbar className={classes.navbarPositioning}/>
        </Box>
        <Box className={classes.bodyContainer}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}


const useStyles = makeStyles()((theme) => ({
  secondaryLayoutContainer:{
    '@media(min-width: 1200px)':{
    backgroundColor:Colors.darkPurple,
    height: '100vh',
    padding: '1.25rem',
    }
  },
  secondaryLayoutInnerContainer:{
    backgroundColor: Colors.white,
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    padding: '1.5rem',
    borderRadius: '1.5rem',
    [theme.breakpoints.only('xs')]: {
      backgroundColor: 'red',
    },
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
    padding: '2rem',
    borderRadius: '1rem',
  }
}));


export default SecondaryLayout