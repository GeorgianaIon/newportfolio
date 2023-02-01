import { Box } from '@mui/material';
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { Colors } from '../constants/Colors';
import theme from '../src/theme';

const PageTitle = ({
  title,
  className,
}:{
  title:string;
  className?:string;
}) => {
  const { classes } = useStyles();
  type convertorObjectType = {
    [k:string]:string 
  }
  const convertRouteIntoTitle: convertorObjectType = {
    '/skills': 'Skills',
    '/about-me': 'About Me',
    '/projects': 'Projects',
    '/contact': 'Contact',
  }

  return (
    <div className={`${classes.pageTitleContainer} ${className}`}>
      {convertRouteIntoTitle[title]}
    </div>
  )
}

const useStyles = makeStyles()(() => ({
  pageTitleContainer:{
    backgroundColor:Colors.darkPurple,
    textAlign: 'center',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: Colors.white,
    height: '4rem',
    fontSize: '2em',
    borderRadius: '1rem',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    [theme.breakpoints.down('sm')]:{
      padding: '0 2rem',
    },
    whiteSpace: 'nowrap',

  },
}));


export default PageTitle