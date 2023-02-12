import { Box, Modal, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React, { FunctionComponent } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Colors } from '../constants/Colors';
import { myProjects } from '../constants/MyProjects'
import ProjectLinks from './ProjectLinks';
import { motion } from 'framer-motion';
import theme from '../src/theme';

interface Props {
  selectedProject: number;
}

const MobileProjectInfo: FunctionComponent<Props> = ({selectedProject}) => {

  const { classes } = useStyles();
const isMobile = useMediaQuery(theme.breakpoints.down('smallerScreen'))

  return (
   <motion.div
   className={classes.infoContainer}
   initial={{opacity: 0, y: '-25%'}}
   animate={{opacity: 1, y: 0}}
   exit={{opacity: 0, y: isMobile ? '-10rem' : '-25%'}}
   transition={{ 
    opacity:{
      duration:0.5,
      ease:'easeIn'
    },
    y:{
      duration:0.3,
      ease:'easeOut'
    }
    }}
   >
    <Box p={2}>
    <Typography variant="h4">
      {myProjects[selectedProject].name}
    </Typography>
    </Box>
    <Typography variant="h6" mb={3} paragraph className={classes.description}>
          {myProjects[selectedProject].description}
    </Typography>
    <Typography variant="h6">
      Technologies: {myProjects[selectedProject].techStack.join(", ")}
    </Typography>
    <ProjectLinks
      github={myProjects[selectedProject].github}
      demo={myProjects[selectedProject].demo}
    />
   </motion.div>

  )
}

const useStyles = makeStyles()((theme) => ({
  infoContainer: {
    backgroundColor: Colors.darkPurple,
    padding: theme.spacing(2),
    marginTop:'-1rem',
    borderRadius: '0 0 1.25rem 1.25rem',
  },
  description: {
    textAlign: 'justify',
  }
}))

export default MobileProjectInfo