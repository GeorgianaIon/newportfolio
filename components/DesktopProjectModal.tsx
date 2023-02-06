import { Box, Modal, Typography } from '@mui/material';
import Link from 'next/link';
import React, { FunctionComponent } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Colors } from '../constants/Colors';
import { myProjects } from '../constants/MyProjects'
import ProjectLinks from './ProjectLinks';
import { motion } from 'framer-motion';

interface ModalProps {
  isVisibile: boolean;
  toggleModal(index:number): void;
  selectedProject: number;
}

const DesktopProjectModal: FunctionComponent<ModalProps> = ({isVisibile, toggleModal, selectedProject}) => {
  const { classes } = useStyles();

  return (
    <Modal
      open={isVisibile}
      onClose={toggleModal}
      className={classes.modalContainer}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 , }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={classes.removeOutline}
      >
      <Box className={classes.modal}>
        <Typography variant="h4" mb={3}>
          {myProjects[selectedProject].name}
        </Typography>

        <Box>
        <Typography variant="h6" mb={3} paragraph>
          {myProjects[selectedProject].description}
        </Typography>
        </Box>

        <Typography variant="h6">
          Technologies: {myProjects[selectedProject].techStack.join(", ")}
        </Typography>
        
        <ProjectLinks
          github={myProjects[selectedProject].github}
          demo={myProjects[selectedProject].demo}
        />
      </Box>
      </motion.div>
    </Modal>
  )
}

const useStyles = makeStyles()((theme) => ({
  modal:{
    minHeight:'50vh',
    minWidth:'50vw',
    maxWidth:'90vw',
    background: Colors.lightBlue,
    outline:'none',
    borderRadius:'1rem',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.35)',
    padding:'2rem',
    [theme.breakpoints.up('md')]:{
      maxWidth:'70vw',
    },
    [theme.breakpoints.up('lg')]:{
      minWidth:'30vw',
      maxWidth:'40vw',
    },
  },
  modalContainer:{
    display:'grid',
    placeItems:'center',
  },
  backDrop:{
    backdropFilter: 'blur(10px)',
  },
  removeOutline:{
    outline:'none',
  },
}))

export default DesktopProjectModal