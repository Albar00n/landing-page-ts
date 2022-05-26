import { Box, Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "../../public/card.png";
import ImageIphone from "../../public/iPhone.png";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  box: {
    margin: "9rem auto",
    alignItems: "center",
  },
  grid1: {
    "@media only screen and (max-width: 600px) ": {
      margin: "2rem auto",
    },
  },
  typo: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "36px",
    lineHeight: "54px",
  },

  imgIphone: {
    background: "#1e2d3d",
    border: "0rem solid #151f2b",
    boxShadow: " 0px 67.6825px 87.2063px rgba(0, 0, 0, 0.11)",
    borderRadius: "2.4rem",
  },
  imgCard: {
    boxShadow: "0px 88.8219px 131.393px -45.7249px rgba(0, 0, 0, 0.14)",
    borderRadius: "5.25573px",
  },
  typo2: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "20px",
    lineHeight: "23px",
  },
  typo3: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "20px",
    lineHeight: "23px",
  },
  gridCard: {
    marginLeft: "1rem",
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
        <Grid item xs={12} sm={5} md={4} lg={4} className={classes.grid1}>
          <Grid>
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
                  Using your phone scan the QR code.
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
                  >
                    2
                  </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={6}>
                  <Typography variant="body1" className={classes.typo3}>
                    Click on start, then allow the camera to scan the card.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={8} md={10} lg={10} style={{ margin: "2.5rem 1rem" }}>
              <Typography className={classes.typo3}>
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
