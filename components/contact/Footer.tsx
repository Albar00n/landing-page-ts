import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    div:{
        marginTop: "15rem"
    },

}));

const Footer = () => {
    const classes = useStyles();
  return (
    <div className={classes.div}>
      <footer>
        <Container >
          <Grid  container
  direction="row"
  justifyContent="flex-end"
  alignItems="flex-end">
            <Grid item xs={5}>
           <b> © Beyin</b> |  All rights reserved 2022
            </Grid>
            <Grid item xs={2} >

                <Link underline="none" href="/contact" color="inherit">
                T&C
                </Link>

            </Grid>
            <Grid item xs={2} >

                <Link  underline="none"
                  target="_blank"
                  href="https://beyin.vercel.app/privacy"
                  color="inherit" >
                Privacy Policy
                </Link>

            </Grid>
          </Grid>

        </Container>

      </footer>

    </div>
  );
};

export default Footer;
