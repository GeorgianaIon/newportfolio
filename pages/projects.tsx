import { Box, useMediaQuery } from '@mui/material'
import { NextPage } from 'next'
import React, { useRef, useState } from 'react'
import { myProjects } from '../constants/MyProjects'
import ProjectCard from '../components/ProjectCard'
import DesktopProjectModal from '../components/DesktopProjectModal'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import { AnimatePresence } from 'framer-motion'

const Projects: NextPage = () => {
  const theme = useTheme(); 
  const {classes} = useStyles();
  const project = useRef<number>(0);
  const [desktopProjectInfo, setDesktopProjectInfo] = useState(false);
  const [mobileProjectInfo, setMobileProjectInfo] = useState(false);

  const toggleDesktopModal = () => setDesktopProjectInfo(curr => !curr);

  const toggleMobileModal = () => setMobileProjectInfo(curr => !curr);

  const toggleSelectedProjectDesktop = (index: number) => {
    project.current = index;
    toggleDesktopModal();
  }

  const toggleSelectedProjectMobile = (index: number) => {
    project.current = index;
    toggleMobileModal();
  }

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const tablet = useMediaQuery(theme.breakpoints.down('md'));
  // const laptop = useMediaQuery(theme.breakpoints.down('lg'));
  // const desktop = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box>
      <AnimatePresence
      >
        {
          desktopProjectInfo && 
            <DesktopProjectModal
              isVisibile={desktopProjectInfo}
              toggleModal={toggleDesktopModal}
              selectedProject={project.current}
            />
        }
      </AnimatePresence>

      <div className={classes.projectCardContainer}
      >
          {
            myProjects.map((project, index) =>
                <ProjectCard
                  key={project.name + project.pictures[0]}
                  name={project.name}
                  pictures={project.pictures}
                  type={project.type}
                  indexOfProject = {index}
                  onClick={ 
                    isMobile 
                    ? () => toggleSelectedProjectMobile(index)
                    : () => toggleSelectedProjectDesktop(index)
                  }
                />
          )}
      </div>
    </Box>
  )
}

const useStyles = makeStyles()(() => ({
  projectCardContainer:{
    display:'flex',
    flexFlow:'row wrap',
  },
}));

export default Projects