import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import { FunctionComponent } from "react";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";

interface Props {
  skillTitle: string;
  skillImage: string
}

const SkillCard: FunctionComponent<Props> = ({skillImage, skillTitle}) => {
  const { classes } = useStyles();

    return <>
    <div className={classes.skill}>
      <Image src={skillImage} width={100} height={100} />
    </div>
  <Typography variant="h5" className={classes.skillText}>{skillTitle}</Typography>
    </>
}

const useStyles = makeStyles()(() => ({
  skillText: {
    color: Colors.darkPurple,
    fontWeight: '700',
    width: '7.7rem',
    textAlign: 'center',
    marginTop: '0.6rem'
  },
  skill:{
    border: '3px solid ' + Colors.darkPurple,
    backgroundColor: Colors.lightPurple,
    borderRadius: '1.25rem',
    padding: '0.8rem',
    width: '8rem'
  },
}));

export default SkillCard