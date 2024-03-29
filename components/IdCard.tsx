import { Grid, Typography, useMediaQuery } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { makeStyles } from "tss-react/mui";
import { Colors } from "../constants/Colors";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import theme from "../src/theme";

interface Contact {
  icon: JSX.Element;
  text: string;
}

const IdCard = () => {
  const { classes } = useStyles();
  const isTabletScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const contacts: Contact[] = [
    {
      icon: <LocalPhoneIcon className={classes.icon} />,
      text: "+45 93 97 88 73",
    },
    {
      icon: <MailOutlineIcon className={classes.icon} />,
      text: "ion.georgiana@hotmail.com",
    },
    {
      icon: <PlaceOutlinedIcon className={classes.icon} />,
      text: "Timisoara, Romania",
    },
  ];

  useEffect(() => {
    const clickedOutsideOfCard = (e: MouseEvent) => {
      if (
        showCard &&
        cardRef.current &&
        !cardRef.current.contains(e.target as Node)
      ) {
        toggleShowCard();
      }
    };
    document.addEventListener("mousedown", clickedOutsideOfCard);
    return () => {
      document.removeEventListener("mousedown", clickedOutsideOfCard);
    };
  }, [showCard]);

  const toggleShowCard = () => {
    setShowCard((prevShow) => !prevShow);
  };
  const Profile = () => {
    return (
      <>
        <div className={classes.profileSection}>
          <div className={classes.profilePic} />

          <Typography variant="h3">Georgiana Ion</Typography>
          <Typography variant="h5" className={classes.profesion}>
            Frontend Developer
          </Typography>
        </div>

        <div className={classes.contactSection}>
          {contacts.map(({ icon, text }, index) => (
            <div key={index} className={classes.contact}>
              {icon}
              <Typography variant="h6" className={classes.contactText}>
                {text}
              </Typography>
            </div>
          ))}

          <div className={classes.contact + " " + classes.downloadCV}>
            <DownloadIcon className={classes.icon} />
            <Typography variant="h6">
              <a
                href="/pdfs/GeorgianaIonCV.pdf"
                download
                className={classes.downloadCVText}
              >
                CV
              </a>
            </Typography>
          </div>
          <div className={classes.contact}>
            <DownloadIcon className={classes.icon} />
            <Typography variant="h6">
              <a
                href="/pdfs/BachelorDiploma.pdf"
                download
                className={classes.downloadCVText}
              >
                Bachelor Diploma
              </a>
            </Typography>
          </div>
          <div className={classes.socialMedia}>
            <a href="https://www.linkedin.com/in/georgiana-ion-84a888230/">
              <LinkedInIcon className={classes.socialMediaIcons} />
            </a>
            <a href="https://github.com/GeorgianaIon">
              <GitHubIcon className={classes.socialMediaIcons} />
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {isTabletScreen ? (
        <div ref={cardRef}>
          <motion.img
            onClick={toggleShowCard}
            src="/images/woman.webp"
            animate={showCard ? {} : { y: [-7, 7] }}
            whileHover={{ scale: 1.2 }}
            transition={
              showCard
                ? {}
                : {
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }
            }
            className={classes.imageButton}
          />

          <motion.div
            className={classes.tabletCardOpen + " " + classes.idCard}
            initial={{ x: "-100%" }}
            animate={{ x: showCard ? 0 : "-100%" }}
          >
            <Profile />
          </motion.div>
        </div>
      ) : (
        <Grid
          item
          container
          xs={3}
          sm={3}
          md={3}
          lg={3}
          className={classes.idCard}
        >
          <Profile />
        </Grid>
      )}
    </>
  );
};

const useStyles = makeStyles()(() => ({
  contactSection: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  contact: {
    display: "flex",
    marginBottom: "1rem",
  },
  icon: {
    color: Colors.white,
    marginRight: "0.5rem",
    [theme.breakpoints.up("ultraWide")]: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
  },
  contactText: {
    marginBottom: "0.2rem",
    [theme.breakpoints.up("ultraWide")]: {
      fontSize: "1.7rem",
    },
  },
  profileSection: {
    height: "17rem",
    backgroundColor: Colors.midPurple,
    borderRadius: "1.25rem 0 0 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("ultraWide")]: {
      height: "20rem",
    },
    [theme.breakpoints.down("lg")]: {
      borderRadius: "0 1.25rem 0 0",
    },
  },
  profilePic: {
    borderRadius: "50%",
    width: "8.3rem",
    height: "8.3rem",
    backgroundImage: "url(/images/gray-photo.webp)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    marginBottom: "1rem",
  },
  profesion: {
    marginTop: "0.3rem",
  },
  downloadCV: {
    marginTop: "2rem",
    cursor: "pointer",
  },
  downloadCVText: {
    textDecoration: "none",
    color: Colors.white,
    [theme.breakpoints.up("ultraWide")]: {
      fontSize: "1.7rem",
    },
  },
  socialMedia: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "end",
    flexGrow: 1,
    "& > *": {
      color: Colors.white,
      cursor: "pointer",
    },
  },
  socialMediaIcons: {
    width: "3.5rem",
    height: "3.5rem",
  },
  imageButton: {
    width: "3rem",
    height: "3rem",
    position: "absolute",
    zIndex: "2",
    margin: "1.5rem 0.7rem",
  },
  tabletCardOpen: {
    position: "absolute",
    height: "100%",
    zIndex: 1,
    borderRadius: "0",
  },
  idCard: {
    borderRight: "1px solid " + Colors.darkPurple,
    backgroundColor: Colors.coldPurple,
    borderRadius: "1.25rem 0 0 1.25rem",
    flexDirection: "column",
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      borderRadius: "0 1.25rem 1.25rem 0",
    },
  },
}));

export default IdCard;
