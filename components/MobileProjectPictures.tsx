import Image from 'next/image';
import React, {FunctionComponent} from 'react'
import { makeStyles } from "tss-react/mui";

interface MobileProjectPicturesProps {
  pictures: string[];
}

const MobileProjectPictures: FunctionComponent<MobileProjectPicturesProps> = ({pictures}) => {
  const { classes } = useStyles();

  return (
    <>
      <div className={ classes.mobileLowerPicture }>
      <Image
        src={pictures[0]}
        layout="fill"
        objectFit="contain"
      />
      </div>
      <div className={ classes.mobileUpperPicture }>
      <Image
        src={pictures[1]}
        layout="fill"
        objectFit="contain"
      />
      </div>
    </>
  )
}

const useStyles = makeStyles()(() => ({
  mobileLowerPicture:{
    position:'absolute',
    left:0,
    height:'100%',
    width:'100%',
    transform:'translate(-20%, 15%)',
    pointerEvents:'none',
  },
  mobileUpperPicture:{
    position:'absolute',
    right:0,
    height:'100%',
    width:'100%',
    transform:'translate(20%, -15%)',
    pointerEvents:'none',
  },
}));

export default MobileProjectPictures