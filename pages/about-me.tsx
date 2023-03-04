import { Button, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link'
import theme from '../src/theme'


const About: NextPage = () => {
const { classes } = useStyles();

  return (
    <Grid item container className={classes.aboutme}>

      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.imageContainer}>
        <Image src='/images/PhotoOfMe.jpg' className={classes.image} alt='about-me' objectFit="cover" layout="fill"/>
        <div className={classes.nameContainer}>
          <Typography variant='h2' className={classes.name}>Georgiana Ion</Typography>
          <Typography variant='h5' className={classes.frontendText}>FRONTEND DEVELOPER</Typography>
        </div>
      </Grid>

      <Grid item container xs={12} sm={12} md={6} lg={6} className={classes.descriptionContainer}>
        <Grid item>
          <Typography variant='h1' className={classes.text + ' ' + classes.title}>Who am I?</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h4' className={classes.text}>I am a 21-year-old Romanian international student in Denmark studying software engineering.</Typography>
        </Grid>
        <Grid item>
          <Typography variant='h4' className={classes.text}> I am passionate about frontend development and have completed a six-month internship in the field. I am optimistic, hard working and always looking to improve my skills.</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.buttonContainer} >
            <Link href='/contact'>
              <Button startIcon={<EmailOutlinedIcon className={classes.icon}/>} variant='contained'>Contact Me</Button>
            </Link>
        </Grid>

      </Grid>

    </Grid>
  )
}

const useStyles = makeStyles()(() => ({
  aboutme: {
    width: '100%',
    height: '100%',


  },
  imageContainer:{
    position: 'relative',
    [theme.breakpoints.down('md')]:{
      minHeight: '50vh',
    },
    '@media(min-height: 1000px) and (min-width: 900px)':{
      minHeight: '85vh',
    }

  },
  image: {
    borderRadius: '1rem 0 0 1rem',
    [theme.breakpoints.down('md')]:{
      borderRadius: '1rem 1rem 0 0',
    }
  },
  text: {
    lineHeight: '50px',
    margin: '5% 0',
  },
  title: {
    paddingTop: '1rem',
    [theme.breakpoints.down('lg')]:{
      fontSize: '4.3rem',
    },
    [theme.breakpoints.down('small380')]:{
      fontSize: '3rem',
    }
  },
  descriptionContainer: {
    padding: '1rem',
    backgroundImage: 'url(/images/elipse/pink-elipse-rotated.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '78%',
    backgroundPosition: 'bottom right',
    borderBottomRightRadius: '1rem',
    '@media(min-height: 1050px)': {
      padding: '3rem 5rem',
    },
    [theme.breakpoints.down('small480')]:{
      padding: '2rem',
    },
    [theme.breakpoints.down('mobileScreen')]:{
      backgroundSize: '100%',
    }
  },
  icon: {
    width: '1.8rem',
    height: '1.8rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'end',
    padding: '0 1rem 1rem 0',
    [theme.breakpoints.down('small480')]:{
      justifyContent: 'center',
    }
  },
  nameContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    left: 0,
    right: 0,
    
  },
  name: {
    fontWeight: '100',
    fontSize: '3.1rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('small380')]:{
      fontSize: '2rem',
    }
  },
  frontendText: {
    fontWeight: '700',
    marginBottom: '0.5rem',
    [theme.breakpoints.down('small380')]:{
      fontSize: '1rem',
    }
  }
}));

export default About