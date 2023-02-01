import { Button, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const About: NextPage = () => {
const { classes } = useStyles();

  return (
    <Grid item container className={classes.aboutme}>

      <Grid item xs={6} sm={6} md={6} lg={6} className={classes.imageContainer}>
        <Image src='/images/PhotoOfMe.jpg' className={classes.image} alt='about-me' objectFit="cover" layout="fill"/>
      </Grid>

      <Grid item xs={6} sm={6} md={6} lg={6} className={classes.descriptionContainer}>
        <Typography variant='h1' className={classes.text}>Who am I?</Typography>
        <Typography variant='h4' className={classes.text}>I am a 21-year-old Romanian international student in Denmark studying software engineering.</Typography>
        <Typography variant='h4' className={classes.text}> I am passionate about frontend development and have completed a six-month internship in the field. I am optimistic, hard working and always looking to improve my skills.</Typography>
        <div className={classes.buttonContainer} >
          <Button startIcon={<EmailOutlinedIcon className={classes.icon}/>} variant='contained'>Contact Me</Button>
        </div>
      </Grid>

    </Grid>
  )
}

const useStyles = makeStyles()(() => ({
  aboutme: {
    // width: '100%',
    // height: '100%',

  },
  imageContainer:{
    position: 'relative',
    // width: '100%',
    // height: '100%',

  },
  image: {
    borderRadius: '1rem 0 0 1rem',
    // width: '100%',
    // height: '100%',
  },
  text: {
    lineHeight: '50px',
    margin: '3rem 0',
  },
  fontWeightTitle: {
    fontWeight: 100,
  },
  descriptionContainer: {
    padding: '0.8rem',
    backgroundImage: 'url(/images/elipse/pink-elipse-rotated.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '78%',
    backgroundPosition: 'bottom right',
  },
  icon: {
    width: '1.8rem',
    height: '1.8rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'end',
  }
}));

export default About