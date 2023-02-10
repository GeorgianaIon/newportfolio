import { Box, Container,  Typography } from '@mui/material'
import React, { FunctionComponent } from 'react'
import { makeStyles } from "tss-react/mui";
import { Colors } from '../constants/Colors';
import theme from '../src/theme';
import TabletProjectPictures from './TabletProjectPictures';
import MobileProjectPictures from './MobileProjectPictures';
import { AnimatePresence } from 'framer-motion';
import MobileProjectInfo from './MobileProjectInfo';

interface IProjectCard {
  indexOfProject: number;
  name: string;
  pictures: string[];
  type:string;
  mobileProjectInfo: boolean;
  selectedProject: number;
  onClick(index:number): void;
}

const ProjectCard: FunctionComponent<IProjectCard> = ({indexOfProject, name, pictures, type, selectedProject, mobileProjectInfo, onClick}) => {
  const { classes } = useStyles();
  let isOpen = (mobileProjectInfo && selectedProject === indexOfProject)

  return (
    <Container
      className={classes.projectCardContainer}
      onClick={() => onClick(indexOfProject)}
    >
  

      <Box className={classes.projectCard}  >
        {
          type === "TABLET" && <TabletProjectPictures pictures={pictures} />
        }
        {
          type === "MOBILE" && <MobileProjectPictures pictures={pictures} />
        }
      </Box>

      { 
      !isOpen &&
      <Box mt={1} 
      >
        <Typography variant="h4">
          {name}
        </Typography>
      </Box>
     } 

      <AnimatePresence>
        {isOpen &&
            <MobileProjectInfo
              selectedProject={selectedProject}
            />
        }
      </AnimatePresence>
    </Container>
  )
}
  

const useStyles = makeStyles()(() => ({
  projectCardContainer:{
    textAlign: 'center',
    display:'grid',
    gridTemplateRows: '1fr 0.25fr',
    aspectRatio: '12/9',
    flexBasis:'100%',
    marginBottom:'1rem',
    [theme.breakpoints.up('sm')]: {
      flexBasis:'90%',
      marginBottom:0,
    },
    [theme.breakpoints.up('md')]: {
      flexBasis:'50%',
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis:'33%',
    },
  },
  projectCard:{
    background: Colors.white,
    position:'relative',
    // minHeight:'90%',
    minHeight: '10rem',
    borderRadius: '1rem',
    overflow:'hidden',
    marginTop: '1.5rem',
    boxShadow: '0 0 0.5rem 0.1rem rgba(0,0,0,0.2)',
    zIndex: 1

  },
}));


export default ProjectCard