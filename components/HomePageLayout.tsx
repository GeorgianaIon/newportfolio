import React from 'react'
import { Grid, } from "@mui/material"
import Head from "next/head";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";
import theme from '../src/theme';

function HomePageLayout({
  children
}:{
  children: React.ReactElement
}) {
  const { classes } = useStyles();

  return (
    <>
    <Head>
    <title>Portfolio</title>
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