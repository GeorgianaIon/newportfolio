import Image from 'next/image';
import React, {FunctionComponent} from 'react'
import { makeStyles } from "tss-react/mui";

interface TabletProjectPicturesProps {
  pictures: string[];
}

const TabletProjectPictures:FunctionComponent<TabletProjectPicturesProps> = ({pictures}) => {
  const { classes } = useStyles();

  return (
    <>
      <div className={ classes.tabletLeftPicture }>
      <Image
        src={pictures[0]}
        layout="fill"
        objectFit="cover"
      />
      </div>
      <div className={ classes.tabletRightPicture }>
      <Image
        src={!!pictures[1] ? pictures[1] : pictures[0]}
        layout="fill"
        objectFit="cover"
      />
      </div>
    </>
  )
}

const useStyles = makeStyles()(() => ({
  tabletLeftPicture:{
    position:'absolute',
    left:0,
    height:'100%',
    width:'100%',
    transform:'translateX(-50%)',
    pointerEvents:'none',
  },
  tabletRightPicture:{
    position:'absolute',
    right:0,
    height:'100%',
    width:'100%',
    transform:'translateX(50%)',
    pointerEvents:'none',
  },
}));

export default TabletProjectPictures