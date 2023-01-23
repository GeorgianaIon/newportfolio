import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";
import Navbar from '../components/Navbar'
import IdCard from "../components/IdCard";
import { textAlign } from "@mui/system";
import SkillCard from "../components/SkillCard";

interface Skill {
  title: string;
  image: string;
}

const Home: NextPage = () => {
  const { classes } = useStyles();

  const skills: Skill[] = [
    {title: 'Creative', image: '/images/skills-images/creativity.png'},
    {title: 'Sociable', image: '/images/skills-images/talking.png'},
    {title: 'Optimistic', image: '/images/skills-images/stay-positive.png'},
    {title: 'Accountable', image: '/images/skills-images/daily-tasks.png'},
    {title: 'Passioned', image: '/images/skills-images/quality-of-life.png'},
  ]

  return (
      <>
        <IdCard />

        <Grid item container xs={9} sm={9} md={9} lg={9} className={classes.homePageContainer}>
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
                  <div className={classes.purpleLaptopContainer}>
                    {/* gif */}
                    <img className={classes.purpleLaptop}
                    src="https://media2.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif?cid=ecf05e47lsu67cnf1684060m1u2eyjnzrx914iko5dg8g6yr&rid=giphy.gif&ct=s"
                    alt="nice giphy"/>
                  </div>
                </div>

                <Grid item container className={classes.skillsContainer}>
                    {skills.map(({image, title}, index) => (
                  <Grid item container xs={2} sm={2} md={2} lg={2} justifyContent={'center'}>
                    <SkillCard
                      key={index}
                      skillImage={image}
                      skillTitle={title} />
                  </Grid>
                      ))}
                </Grid>
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
    paddingBottom: 0,
    width:'100%',
    height: '95vh',
    flexDirection: 'column'

  },
  presentationContainer:{
    border: '1px solid ' + Colors.lightBlue,
    width: '100%',
    display: 'flex',
    borderRadius: '1.5rem',
    marginTop: '4.8rem',
    height: '50%'
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  width: {
    width: '320px'
  },
  purpleLaptop: {
    width: '100%',
    height: '80%',
    marginTop: '2rem',
  },
  purpleLaptopContainer: {
    marginRight: '3rem'
  },
  skillsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    display: 'flex',
  },

}));

export default Home;
