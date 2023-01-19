import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";
import Navbar from '../components/Navbar'
import IdCard from "../components/IdCard";

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
      <>
        <IdCard />

        <Grid item container xs={9} sm={9} md={9} lg={9} >
          <div className={classes.homePageContainer}>
                <Navbar />

                <div className={classes.presentationContainer}>
                  <Grid item lg={8} className={classes.presentationText}>
                    <div className={classes.width}>
                      <Typography variant="h4" className={classes.hi}>
                        Hi, my name is
                      </Typography>
                      <Typography variant="h2" className={classes.myName}>
                        Georgiana Ion
                      </Typography>
                      <Typography variant="h3" className={classes.whatIDo}>
                        I create stunning websites your users will adore
                      </Typography>
                    </div>
                  </Grid>
                  <div >
                    {/* gif */}
                    <img className={classes.purpleLaptop}
                    src="https://media2.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif?cid=ecf05e47lsu67cnf1684060m1u2eyjnzrx914iko5dg8g6yr&rid=giphy.gif&ct=s"
                    alt="nice giphy"/>
                  </div>
                </div>
          </div> 
        </Grid>
        </>

  );
};

const useStyles = makeStyles()(() => ({

  body:{
    padding: '1rem',
    background: Colors.darkPurple,
    height: '100vh'
  },
  mainContainer: {
    borderRadius: '1.25rem',
    background: Colors.white
  },
  homePageContainer:{
    padding: '1.75rem 4.25rem',
    width:'100%'

  },
  presentationContainer:{
    border: '1px solid ' + Colors.lightBlue,
    width: '100%',
    display: 'flex',
    borderRadius: '1.5rem',
    marginTop: '4.8rem'
  },
  hi:{
    color: Colors.midPurple
  },
  whatIDo: {
    color: Colors.darkPurple,
    textAlign: 'right',
    fontSize: '30px'
  },
  myName: {
    color: Colors.darkPurple,
    fontWeight: '400',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  presentationText: {
    padding: '5.6rem',
  },
  width: {
    width: '320px'
  },
  purpleLaptop: {
    width: '80%',
    height: '80%',
    marginTop: '2rem'
  }
}));

export default Home;
