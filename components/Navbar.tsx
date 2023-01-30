import { Drawer, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";
import { AnimatePresence, motion } from "framer-motion"
import theme from "../src/theme";

interface Links {
    destination: string,
    link: string
  }

const Navbar = ({
  className
}:{
  className?:string
}) => {
    const isTabletScreen=useMediaQuery(theme.breakpoints.down('sm'));

    const { classes } = useStyles();
    const [activeMenu, setActiveMenu] = useState(false)
    const links: Links[] = [
        { destination: '/home', link: '/'},
        { destination: '/skills', link: '/skills'},
        { destination: '/about me', link: '/about-me'},
        { destination: '/projects', link: '/projects'},
        { destination: '/contact', link: '/contact'}
      ]

      const toggleActiveMenu = () => {
        setActiveMenu(currentState => !currentState)
    }

      const Menu = () => {
        return <>
        {links.map(({destination, link}, index) => (
            <Link href={link} key={index}>
              <Typography className={classes.headerText} variant="h5">{destination}</Typography>
            </Link>
        ))}
      </>
      }

    return (isTabletScreen ? 
    <>
        <div className={classes.hamburgerDisplay} >
          <div className={activeMenu ? classes.activeHamburger : classes.hamburger} onClick={toggleActiveMenu}/>
        </div>

      <Drawer 
      className={classes.menuDrawer}
      anchor="right"
      open={activeMenu}
      onClose={toggleActiveMenu} >
        <Menu />
      </Drawer>
    </>
  :
    <Grid container className={`${classes.headerContainer} ${className}`}>
      <Menu />
    </Grid>)
  };

const useStyles = makeStyles()(() => ({
  headerContainer:{
    width: '100%',
    height: '3.1rem',
    borderRadius: '3.75rem',
    background: Colors.coldPurple,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText:{
    cursor: 'pointer',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]:{
      fontSize: '2rem',
      fontWeight: 'bold',
    }
  },
  hamburgerDisplay:{
    display:'flex',
    width:'100%',
    alignItems:'center',
    justifyContent:'end',
    height: '4rem',
    // ':hover':{
    //     color: Colors.gray
    // },
},
  activeHamburger: {
    width: "1.6rem",
    height: "0.188rem",
    borderRadius: "0.313rem",
    transform: "translateX(-3.125rem)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    marginBottom: '0.45rem',
    zIndex: 443,
    "&::before": {
        content: "''",
        position: "absolute",
        width: "1.6rem",
        height: "0.188rem",
        background: Colors.darkPurple,
        borderRadius: "0.313rem",
        transition: "all 0.5s ease-in-out",
        transform: "rotate(45deg) translate(2.188rem,-2.188rem)",
    },
        "&::after": {
        content: "''",
        position: "absolute",
        width: "1.6rem",
        height: "0.188rem",
        background: Colors.darkPurple,
        borderRadius: "0.313rem",
        transition: "all 0.5s ease-in-out",
        transform: "rotate(-45deg) translate(2.188rem, 2.188rem)",
        },
  },
  hamburger: {
    width: "1.6rem",
    height: "0.188rem",
    background: Colors.darkPurple,
    borderRadius: "0.313rem",
    boxshadow: "0 0.125rem 0.313rem rgb(255, 101, 47,.2)",
    transition: "all 0.5s ease-in-out",
    marginBottom: '0.45rem',
    zIndex: 4,

    "&:: before": {
        content: "''",
        position: "absolute",
        width: "1.6rem",
        height: "0.188rem",
        background: Colors.darkPurple,
        borderRadius: "0.313rem",
        transition: "all 0.5s ease-in-out",
        transform: "translateY(-0.625rem)",
    },
    "&:: after": {
        content: "''",
        position: "absolute",
        width: "1.6rem",
        height: "0.188rem",
        background: Colors.darkPurple,
        borderRadius: "0.313rem",
        transition: "all 0.5s ease-in-out",
        transform: "translateY(0.625rem)",
    },
},
  menuDrawer: {
    "& .MuiPaper-root": {
      width: 300,
      backgroundColor: Colors.coldPurple,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      zIndex: 1
    }
  }
}));

export default Navbar;