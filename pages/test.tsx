import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const Test: NextPage = () => {
  const { classes } = useStyles();

  return (<></>
    // <Grid className={classes.root}>
    //   {/* <h1>test page</h1> */}
    // </Grid>
  );
};

const useStyles = makeStyles()(() => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 1,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    height: 100,
    padding: "20px 30px",
  },
  miau: {},
}));

export default Test;
