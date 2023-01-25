import { AspectRatio } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material"
import { width } from "@mui/system";
import Image from "next/image"
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";

interface Props {
  skillTitle: string;
  skillImage: string
}

const SkillCard: FunctionComponent<Props> = ({skillImage, skillTitle}) => {
  const { classes } = useStyles();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;  // null check
    const div = divRef.current;
    div.style.height = `${div.clientWidth }px`;
    const handleResize = () => div.style.height = `${div.clientWidth }px`;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    return <>
    <div ref={divRef} className={classes.skillContainer}>
      <div className={classes.skill} >
        <div className={classes.imageContainer}>
          <Image src={skillImage} className={classes.image} objectFit="contain" layout="fill" />
        </div>
      </div>
    <Typography variant="h5" className={classes.skillText}>{skillTitle}</Typography>
    </div>
    </>
}

const useStyles = makeStyles()(() => ({
  skillText: {
    color: Colors.darkPurple,
    fontWeight: '500',
    width: '7.7rem',
    textAlign: 'center',
    marginTop: '0.6rem'
  },
  skill:{
    border: '3px solid ' + Colors.darkPurple,
    backgroundColor: Colors.lightPurple,
    borderRadius: '1.25rem',
    padding: '0.8rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    AspectRatio: '1/1',

    // alignItems: 'stretch',
    // flexWrap: 'wrap',
    // paddingTop: '100%'
  },
  skillContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    flexBasis: '16%',
    // AspectRatio: '1/1'
    // paddingTop: '15%',
    // '@media(min-height: 780px) & (max-width: 1800px)':{
    //   height: '80%',
    // },
    // '@media(min-height: 970px) && media(max-width: 1800px)':{
    //   height: '60%',
    // },


  },
  image: {
    position: "absolute",
    width: '100%',
    height: '100%',
  },
  imageContainer:{
    width: '100%',
    height: '100%',
    position: "relative"

  }
}));

export default SkillCard