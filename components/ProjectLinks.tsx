import { Grid } from '@mui/material';
import Link from 'next/link';
import React, { FunctionComponent } from 'react'

interface ProjectLinksProps {
  github?: string;
  demo?: string;
}

const ProjectLinks: FunctionComponent<ProjectLinksProps> = ({github, demo}) => {
  if(!!!github && !!!demo) return null;

  return (
  <Grid container mt={2} >
    <Grid item xl={1} lg={2} md={3} sm={4} xs={12} m={1}>
      <Link href={github as string}>
        Github
      </Link>
    </Grid>
    {!(demo as string === '') && 
    <Grid item xl={1} lg={2} sm={4} xs={12} m={1}>
      <Link href={demo as string}>
        Demo
      </Link>
    </Grid>}
  </Grid>
  )
}

export default ProjectLinks