import { Box, Modal, Typography } from '@mui/material';
import Link from 'next/link';
import React, { FunctionComponent } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Colors } from '../constants/Colors';
import { myProjects } from '../constants/MyProjects'
import ProjectLinks from './ProjectLinks';
import { motion } from 'framer-motion';

interface Props {
  selectedProject: number;
}

const MobileProjectInfo: FunctionComponent<Props> = ({selectedProject}) => {

  const { classes } = useStyles();

  return (
   <div className={classes.infoContainer}>
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
   </div>

  )
}

const useStyles = makeStyles()((theme) => ({
  infoContainer: {
    backgroundColor: Colors.darkPurple,
    padding: theme.spacing(2),
  },
  description: {
    textAlign: 'justify',
  }
}))

export default MobileProjectInfo