// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import StyleButton from "../button/StyleButton";
import Link from "next/link";
import { Divider } from "@material-ui/core";
// import style from "../styles/works.module.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      height: "480px",
      background: "#fbfbfb",
      border: "2px solid rgba(227, 227, 227, 0.8)",
      boxShadow: "0px 138px 189px -76px rgba(0, 0, 0, 0.06)",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "@media only screen and (max-width: 300px)": {
        width: "100%",
        border: "1px solid red",
        // margin:"0rem -1rem",
      },
      "@media only screen and (max-width: 700px)": {
        width: "100%",
        margin: "0rem 1.5rem",
      },
      "@media only screen and (max-width: 993px)": {
        width: "100%",
        margin: "0rem 2rem",
      },
      "@media only screen and (max-width: 1200px)": {
        width: "90%",

        margin: "0rem 3rem",
      },
    },
    card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    typo: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "48px",
      lineHeight: "80px",
      /* or 167% */
      width: "70%",
      textAlign: "center",
      display: "flex",
      color: "#252d38",
      "@media only screen and (min-width: 300px)": {
        fontSize: "2.5rem",
      },
      "@media only screen and (min-width: 700px)": {
        fontSize: "3.5rem",
      },
    },
    grid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    link: {
      boxShadow: "0px 31px 51px rgba(0, 0, 0, 0.03)",
      textDecoration: "none",
      marginTop: "2rem",
    },
  })
);

export const Works = () => {
  const classes = useStyles();
  return (
    <div id="works" className={classes.box}>
      <Grid>
        <Grid className={classes.card}>
          <Typography component="div" variant="h2" className={classes.typo}>
            Let’s make your business card close more deals
          </Typography>
        </Grid>

        <Grid className={classes.grid}>
          <Link href="https://ebcdb.beyin.me/signup">
            <a className={classes.link}>
              <StyleButton />
            </a>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Works;
