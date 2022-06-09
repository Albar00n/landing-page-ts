import React ,{useState}from "react";
import Head from "next/head";
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
  Dialog,
  Box} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import Side from "../components/contact/Side";
import Form from "../components/contact/Form"

import Link from "next/link";
import Navbar from "../components/contact/Nav"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
        height: "100vh"
      },
    box:{
        position: 'fixed',
        },
        bgImage:{
            height: "100vh",
            "@media only screen and (max-width: 640px)":{
                display: "none"
            }
        },
        form:{
            // position: 'relative',
            "@media only screen and (max-width: 1440px)":{
                margin:"3rem auto"
            },
            "@media only screen and (max-width: 640px)":{
               border:"1px solid",

            }
        }
  }));

export default function AutoGrid() {
  const classes = useStyles();

  return (
  <>

      <Head>
        <title>Beyin Contact</title>
        <meta name="description" content="Beyin Digital Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>

        {/* <Navbar /> */}
   <Navbar />
        {/*  */}
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          className={classes.box}
        >

        <Grid item xs={6}  className={classes.bgImage}>
<div>
<Side />
    </div>
              </Grid>

          <Grid item sm={6}   className={classes.form}>
                <Form />
          </Grid>
        </Grid>
      </>

  </>

  );
}
