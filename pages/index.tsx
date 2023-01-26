import type { NextPage } from "next";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";
import Navbar from '../components/Navbar'
import IdCard from "../components/IdCard";
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

        <Grid item container xs={12} sm={12} md={12} lg={9} className={classes.homePageContainer}>
                <Navbar />

                <Grid item container xs={12} sm={12} md={12} lg={12} className={classes.presentationContainer}>
                  <Grid item xs={12} sm={12} md={8} lg={8} className={classes.presentationText}>
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
                  <Grid item xs={12} sm={12} md={4} lg={4} className={classes.purpleLaptopContainer}>
                    {/* gif  */}
                    <img className={classes.purpleLaptop}
                    src="https://media2.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif?cid=ecf05e47lsu67cnf1684060m1u2eyjnzrx914iko5dg8g6yr&rid=giphy.gif&ct=s"
                    alt="nice giphy"/>
                  </Grid>
                </Grid>

                <Grid item  xs={12} sm={12} md={12} lg={12} className={classes.skillsContainer}>
                    {skills.map(({image, title}, index) => (
                  // <Grid item container xs={2} sm={2} md={2} lg={2} className={classes.skillCard}>
                    <SkillCard
                      key={index}
                      skillImage={image}
                      skillTitle={title} 
                      />
                  // </Grid>
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
    '@media(max-width:1200px)':{
      height: '100vh',
    },
    flexDirection: 'row',

  },
  presentationContainer:{
    border: '1px solid ' + Colors.lightBlue,
    width: '100%',
    display: 'flex',
    borderRadius: '1.5rem',
    '@media(max-height: 650px)':{
      marginTop: '4.8rem',
    },
    '@media(max-width: 900px)':{
      height: '60%',
      backgroundSize: '95%',
      paddingTop: '2rem'
    },
    height: '50%',

    // paddingRight: '1rem',
    backgroundImage: 'url(/images/purpleCircle.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    backgroundSize: '45%',
    // flexDirection: 'column'

  },
  hi:{
    color: Colors.midPurple,
    '@media(min-width: 1900px)':{
      fontSize: '3rem'
    }
  },
  whatIDo: {
    color: Colors.darkPurple,
    textAlign: 'right',
    fontSize: '30px',
    '@media(min-width: 1900px)':{
      fontSize: '3.5rem'
    }
  },
  myName: {
    color: Colors.darkPurple,
    fontWeight: '400',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    '@media(min-width: 1900px)':{
      fontSize: '5rem'
    }
  },
  presentationText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  width: {
    width: '20rem',
    '@media(min-width: 1900px)':{
      width: '35rem'
    },
  },
  purpleLaptop: {
    width: '100%',
    height: '80%',
    marginTop: '2rem',
    '@media(max-width: 1200px)':{
      width: '70%',
      height: '60%',
    },
  },
  purpleLaptopContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skillsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    display: 'flex',
    marginTop: '1rem',
    flexFlow: 'row wrap',
  },
}));

export default Home;
