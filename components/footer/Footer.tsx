import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../logo/index";

const useStyles = makeStyles(() => ({
  box:{
    marginTop:'12rem',

  },
  grid: {
    marginTop:'2rem',
    "@media only screen and (max-width: 600px)": {
      fontSize: "16px",
    },
  },
  footer: {
    fontSize: "12px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    "@media only screen and (max-width: 600px)": {
      fontSize: "9px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <footer>
        <Container style={{ textAlign: "center" }}>
          <Grid container spacing={4} className={classes.grid}>
            {/* <Grid item xs={3} sm={6} md={3} lg={3}>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  T&C
                </Link>
              </Box>
            </Grid> */}
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <div>

                <Link underline="none" target="_blank" href="https://beyin.vercel.app/privacy" color="inherit">
                  Privacy Policy
                </Link>
              </div>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <div>
                <Link underline="none" href="/contact" color="inherit" >
                  Contact us
                </Link>
              </div>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}>
              <div>
                <Link underline="none" href="#price" color="inherit">
                  Pricing
                </Link>
              </div>
            </Grid>
          </Grid>
          {/* Logo */}
          <div style={{ margin: "3rem", textAlign: "center" }}>
            <Logo />
          </div>
          <div>
            <Typography className={classes.footer}>
              Beyin Digital Technology Limited | Abu Dhabi, Masdar city
              <br />
              © Beyin Digital Technology Limited - 2022. The trademarks, logos,
              designs, services and the content appearing herein, is exclusively
<br />
              owned by Beyin Digital Technology Limited, and/or its licensors,
              and are protected. Any unauthorized use or reproduction or

              distribution, shall attract suitable action under
              applicable law.
            </Typography>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
