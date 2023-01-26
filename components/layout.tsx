import { Grid } from "@mui/material"
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react"
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";

export default function Layout({ 
    children
 }:{
    children: ReactElement
}) {
  const { classes } = useStyles();
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
    <Head>
    <title>Portfolio</title>
    </Head>
    <Grid container className={classes.body}>
      <Grid item container className={classes.mainContainer}>
        {isHomePage ? 
        (children)
    :
        (<h1>lala</h1>)
        }
      </Grid>
    </Grid>
    </>
    
  )
}

const useStyles = makeStyles()(() => ({
    body:{
      '@media(min-width: 1200px)':{
        padding: '1rem',
        background: Colors.darkPurple,
        height: '100vh'
      }
      },
      mainContainer: {
        borderRadius: '1.25rem',
        background: Colors.white
      },
}));
