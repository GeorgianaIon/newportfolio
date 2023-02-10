import React, { FunctionComponent } from 'react'
import { Grid, } from "@mui/material"
import Head from "next/head";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";
import theme from '../src/theme';

interface Props {
  children: React.ReactElement
}

const HomePageLayout: FunctionComponent<Props> = ({children}) => {
  const { classes } = useStyles();

  return (
    <>
    <Head>
    <title>Georgiana's Portfolio</title>
    </Head>
    <Grid container className={classes.body}>
      <Grid item container className={classes.mainContainer}>
        {children}
      </Grid>
    </Grid>
  </>
  )
}


const useStyles = makeStyles()(() => ({
  body:{
    [theme.breakpoints.up('lg')]:{
      padding: '1rem',
      background: Colors.darkPurple,
      height: '100vh'
    },
    },
    mainContainer: {
      borderRadius: '1.25rem',
      background: Colors.white,
    },
}));


export default HomePageLayout