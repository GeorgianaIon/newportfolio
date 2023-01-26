import { Widgets } from "@mui/icons-material";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";

interface Links {
    destination: string,
    link: string
  }

const Navbar = () => {
    const { classes } = useStyles();

    const links: Links[] = [
        { destination: '/home', link: '/'},
        { destination: '/skills', link: '/skills'},
        { destination: '/about me', link: '/about-me'},
        { destination: '/projects', link: '/projects'},
        { destination: '/contact', link: '/contact'}
      ]

    return (
    <Grid container className={classes.headerContainer}>
    {links.map(({destination, link}, index) => (
        <Link href={link} key={index}>
          <Typography className={classes.headerText} variant="h5">{destination}</Typography>
        </Link>
    ))}
  </Grid>
  )
  };

const useStyles = makeStyles()(() => ({
  headerContainer:{
    width: '100%',
    height: '3.1rem',
    borderRadius: '3.75rem',
    background: Colors.coldPurple,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  headerText:{
    cursor: 'pointer',
    fontSize: '1rem',
    '@media(min-width: 1900px)':{
      fontSize: '1.6rem'
    }
  }
}));

export default Navbar;