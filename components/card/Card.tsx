import * as React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography, makeStyles } from "@material-ui/core";
import StyleButton from "../button/StyleButton";
import Image from "next/image";
import ImageCard from "../../public/squircle.png";
import Link from "next/link";
// import style from "../styles/card.module.css";

const useStyles = makeStyles(() => ({
  box: {
    margin: "10rem auto",
    "@media only screen and (max-width: 590px)": {
      width: "110%",
    },
    "@media only screen and (max-width: 1200px)": {
      width: "90%",
    },
  },
  typo: {
    marginTop: "1rem",
    fontWeight: 400,
    lineHeight: "115%",
    fontSize: "36px",
    color: "#252d38",
    "@media only screen and (max-width: 590px)": {
      textAlign: "center",
    },
  },
  typo2: {
    marginTop: "1rem",
    fontWeight: 400,
    lineHeight: "115%",
    fontSize: "16px",
    color: "#252d38",
  },

  link: {
    fontFamily: "Poppins",
    textDecoration: "none",
    color: "#58696d",
    fontSize: "21px",
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        spacing={1}
      >
        <Grid item sm={4} md={6} lg={2}>
          <Image src={ImageCard} alt="Image Card" />
        </Grid>
        <Grid item sm={6} md={6} lg={7}>
          <div>
            <Typography variant="h4" className={classes.typo}>
              Be the market leader
            </Typography>
            <Typography
              style={{ margin: "2rem 1px" }}
              className={classes.typo2}
            >
              Stay ahead of the curve; upgrading to EBC will boost your business{" "}
              <br /> reputation and sales, especially with high profile clients.
            </Typography>
          </div>
          {/* <div> */}
          <Link href="https://ebcdb.beyin.me/signup">
            <a className={classes.link}>
              <StyleButton />
            </a>
          </Link>
          {/* </div> */}
        </Grid>
      </Grid>
    </div>
  );
}
