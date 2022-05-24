import { Box, Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "../../public/card.png";
import ImageIphone from "../../public/iPhone.png";
import Image from "next/image";
// import style from "../styles/index.module.css";

const useStyles = makeStyles(() => ({
  box: {
    margin: "9rem auto",
    alignItems: "center",
    "@media only screen and (max-width: 900px) ": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  typo: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "36px",
    lineHeight: "54px",
    display: "flex",
    alignItems: "center",
  },

  imgIphone: {
    background: "#1e2d3d",
    border: "0rem solid #151f2b",
    boxShadow: " 0px 67.6825px 87.2063px rgba(0, 0, 0, 0.11)",
    borderRadius: "2.4rem",
  },
  card: {
    "@media only screen and (max-width: 600px)": {
      margin: "1.4rem 3rem",
    },
  },
  imgCard: {
    background: "#f9fcfd",
    border: "0.1px solid rgba(37, 45, 56, 0.23)",
    boxShadow: "0px 88.8219px 131.393px -45.7249px rgba(0, 0, 0, 0.14)",
    borderRadius: "5.25573px",
    width: "70%",
  },
  typo2: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "20px",
    lineHeight: "115%",
    "@media only screen and (max-width: 600px)": {
      width: "115%",
    },
    "@media only screen and (max-width: 900px)": {
      width: "115%",
    },
  },
  gridCard: {
    marginLeft: "1rem",
  },
  typoPhone: {
    "@media only screen and (max-width: 600px)": {
      margin: "auto 2rem 1rem",
      width: "80%",
    },
    "@media only screen and (max-width: 900px)": {
      width: "70%",
    },
  },
  tow: {
    "@media only screen and (max-width: 600px)": {
      margin: "-1.5rem 4rem",
    },
  },
}));

export default function Work() {
  const classes = useStyles();
  return (
    <Box className={classes.box} id="work">
      <Box style={{ margin: "3rem auto" }}>
        <Typography variant="h4" className={classes.typo}>
          {" "}
          How it works ?
        </Typography>
      </Box>
      {/* grid card all */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.gridCard}
      >
        {/* one card */}
        <Grid item xs={12} sm={5} md={4} lg={4}>
          <Grid className={classes.card}>
            <Grid style={{ margin: "1rem 0rem" }}>
              <Typography
                className={classes.typo2}
                style={{ fontSize: "60px" }}
              >
                1
                <Typography
                  style={{ margin: " 1rem 5rem" }}
                  className={classes.typo2}
                >
                  Using your phone <br /> scan the QR code.
                </Typography>
              </Typography>
            </Grid>
            <ButtonBase className={classes.imgCard}>
              <Image src={ImageCard} alt="Card image" />
            </ButtonBase>
          </Grid>
        </Grid>
        {/* tow card */}
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          sm={7}
          md={7}
          lg={5}
        >
          <Grid>
            <ButtonBase className={classes.imgIphone}>
              <Image src={ImageIphone} alt="Image Iphone" />
            </ButtonBase>
          </Grid>
          <Grid item sm={5} md={4} lg={8}>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography
                    style={{ fontSize: "4rem", margin: "-22px 14px" }}
                    className={classes.tow}
                  >
                    2
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={6}>
                  <Typography variant="body1" className={classes.typoPhone}>
                    Click on start, then allow the camera to scan the card.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm={8}
              md={10}
              lg={10}
              style={{ margin: "2.5rem 1rem" }}
              className={classes.typoPhone}
            >
              <Typography>
                The website will recognize the card and show the Extended
                Business Card.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
