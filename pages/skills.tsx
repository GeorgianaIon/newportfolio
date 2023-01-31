import { Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import SkillCard from '../components/SkillCard'
import { Colors } from '../constants/Colors'
import theme from '../src/theme'

interface Skill {
  title: string;
  image: string;
}

const Skills: NextPage = () => {
const { classes } = useStyles();
const hardSkills: Skill[] = [
  {title: 'HTML', image: '/images/skills-images/hard-skills/html.png'},
  {title: 'CSS', image: '/images/skills-images/hard-skills/css.png'},
  {title: 'JavaScript', image: '/images/skills-images/hard-skills/javascript.png'},
  {title: 'TypeScript', image: '/images/skills-images/hard-skills/typescript.png'},
  {title: 'MaterialUI', image: '/images/skills-images/hard-skills/material-ui.png'},
  {title: 'React', image: '/images/skills-images/hard-skills/science.png'},
  {title: 'C#', image: '/images/skills-images/hard-skills/c-sharp.png'},
  {title: 'Git', image: '/images/skills-images/hard-skills/git.png'},
  {title: 'Clean Code', image: '/images/skills-images/hard-skills/computer.png'},
]

const softSkills: Skill[] = [
  {title: 'Team work', image: '/images/skills-images/soft-skills/team-work.png'},
  {title: 'Agile thinking', image: '/images/skills-images/soft-skills/agile.png'},
  {title: 'Commited', image: '/images/skills-images/soft-skills/commitment.png'},
  {title: 'Communicative', image: '/images/skills-images/soft-skills/discussion.png'},
  {title: 'Problem solving', image: '/images/skills-images/soft-skills/problem-solving1.png'},
  {title: 'Adaptible', image: '/images/skills-images/soft-skills/adaptation.png'},
  {title: 'Fast learning', image: '/images/skills-images/soft-skills/fast-learning.png'},
  {title: 'Decision making', image: '/images/skills-images/soft-skills/decision-making.png'},
  {title: 'Detail Oriented', image: '/images/skills-images/soft-skills/detail-oriented.png'},
]


  return (
    <Grid item container className={classes.skillsContainer}>

      <Grid item container xs={12} sm={12} md={6} lg={6} className={classes.hardSkillsContainer}>
        <Grid item >
            <Typography variant='h1' className={classes.title + ' ' + classes.hardTitleColor}>Hard Skills</Typography>
        </Grid>

        <Grid item container xs={12} sm={12} md={12} lg={12} className={classes.skillsCardContainer}  >
            {hardSkills.map(({image, title}, index) => (
            <SkillCard
              key={index}
              skillImage={image}
              skillTitle={title} 
              skillsPage={true}
              />
              ))}
        </Grid>

      </Grid>

      <Grid item container xs={12} sm={12} md={6} lg={6} className={classes.softSkillsContainer}>
        <Grid item >
            <Typography variant='h1' className={classes.title + ' ' + classes.softTitleColor }>Soft Skills</Typography>
        </Grid>

        <Grid item container xs={12} sm={12} md={12} lg={12} className={classes.skillsCardContainer}  >
            {softSkills.map(({image, title}, index) => (
            <SkillCard
              key={index}
              skillImage={image}
              skillTitle={title} 
              skillsPage={true}
              />
              ))}
        </Grid>
      </Grid>

    </Grid>
  )
}

const useStyles = makeStyles()(() => ({
  skillsContainer:{
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
  },
  hardSkillsContainer:{
    justifyContent: 'center',
    backgroundImage: 'url(/images/elipse/pink-elipse.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '48%',
    backgroundPosition: 'top left',
    borderRadius: '1rem 0 0 0',
    [theme.breakpoints.down('sm')]:{
      backgroundSize: '58%',
    },
  },
  softSkillsContainer:{
    justifyContent: 'center',
    backgroundImage: 'url(/images/elipse/purple-elipse.png)',
    backgroundColor: Colors.lightPurple,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '64%',
    backgroundPosition: 'bottom right',
    borderRadius: '0 1rem 1rem 0',

  },
  title: {
    fontWeight: 300,
    [theme.breakpoints.down('sm')]:{
      marginTop: '1rem'
    }
  },
  skillsCardContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: 1,
  display: 'flex',
  marginTop: '1rem',
  flexFlow: 'row wrap',
  [theme.breakpoints.down('smallerScreen')]:{
    justifyContent: 'center',
  },
  },
  skillCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  softTitleColor: {
    color: Colors.coldPurple,
  },
  hardTitleColor: {
    color: Colors.lightPurple,
  },
}));

export default Skills