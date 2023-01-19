import { Grid, Typography } from "@mui/material"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";

interface Contact {
    icon: JSX.Element;
    text: string;
  }

const IdCard = () => {
    const { classes } = useStyles();

    const contacts: Contact[] = [
        { icon: <LocalPhoneIcon className={classes.icon} />, text: "+45 93 97 88 73" },
        { icon: <MailOutlineIcon className={classes.icon} />, text: "ion.georgiana@hotmail.com" },
        { icon: <PlaceOutlinedIcon className={classes.icon} />, text: "Horsens, Denmark" }
      ];

return <Grid item xs={3} sm={3} md={3} lg={3} className={classes.idCard}>
<div className={classes.profileSection}>
  <div className={classes.profilePic} />

  <Typography variant="h3">Georgiana Ion</Typography>
  <Typography variant="h5" className={classes.profesion}>Frontend Developer</Typography>
</div>
<div className={classes.contactSection}>
  {contacts.map(({ icon, text }, index) => (
    <div key={index} className={classes.contact}>
      {icon}
      <Typography variant="h6" className={classes.contactText}>{text}</Typography>
    </div>
  ))}
</div>
</Grid>
}

const useStyles = makeStyles()(() => ({
    contactSection: {
        padding: '2rem',
      },
      contact:{
        display: 'flex',
        marginBottom: '1rem'
      },
      icon: {
        color: Colors.white,
        marginRight: '0.5rem'
      },
      contactText: {
        marginBottom: '0.2rem'
      },  idCard: {
        borderRight: '1px solid ' + Colors.darkPurple,
        backgroundColor: Colors.coldPurple,
        borderRadius: '1.25rem 0 0 1.25rem'
      },
      profileSection: {
        height: '17rem',
        backgroundColor: Colors.midPurple,
        borderRadius: '1.25rem 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      profilePic: {
        borderRadius: '50%',
        width: '8.3rem',
        height: '8.3rem',
        backgroundImage: 'url(/images/GrayPhoto.png)',
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        marginBottom: '1rem'
      },
      profesion: {
        marginTop: '0.3rem'
      },
}));


export default IdCard