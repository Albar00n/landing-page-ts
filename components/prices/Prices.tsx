import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  box: {
    marginBottom: "10rem",
  },
  card: {
    borderColor: "#E3E3E3",
    borderRadius: "8.05664px",
    transition: "0.4s",
    width: "273px",
    height: "306px",

    "&:hover": {
      transform: "scale(1.1)",
      border: "2.671387px solid #E3E3E3",
      boxShadow: "0px 67px 141px -34px rgba(0, 0, 0, 0.25)",
      borderRadius: "8.05664px",
    },
  },
  button: {
    margin: "2rem 3rem",
    border: "1px solid #E3E3E3",
    borderRadius: "37px",
    background: "#E3E3E3",

    width: "70%",
  },
  icon: {
    fontSize: "small",
    margin: "3px",
  },
  typo: {
    margin: "3rem 1rem",
    width: "50%",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "115%",
    "@media only screen and (max-width: 800px)": {
      width: "90%",
      marginLeft: "2rem",
    },
  },
  typo2: {
    margin: "3rem 1rem",
    width: "57%",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: "115%",
    "@media only screen and (max-width: 800px)": {
      width: "90%",
      marginLeft: "2rem",
    },
  },
  title: {
    fontSize: "2rem",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Box id="price" className={classes.box}>
      <Typography className={classes.typo}>
        We made sure you get the best prices so you can thrive !
      </Typography>
      <Typography className={classes.typo2}>
        Our Extended Business Card is extremely affordable at every scale. Our
        goal is to provide amazing technology for everyone for the lowest price
        possible.
      </Typography>
      <Box>
        <Box style={{ margin: "4rem auto" }}>
          {/* NEW CARD  */}
          <Grid
            container
            spacing={9}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {/* card one */}
            <Grid item>
              <Paper className={classes.card}>
                <CardHeader
                  action={
                    <Typography variant="h5">
                      {" "}
                      50 <br /> <small>cards</small>{" "}
                    </Typography>
                  }
                  title={`SME\n\b\ Subscription`}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    <CheckIcon className={classes.icon} /> $1.2 per user monthly
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <CheckIcon className={classes.icon} /> Customizable card and
                    logo
                  </Typography>
                </CardContent>
                <Box>
                  <Button className={classes.button}>$270/Y only</Button>
                </Box>
              </Paper>
            </Grid>
            {/* card two */}
            <Grid item>
              <Paper className={classes.card}>
                <CardHeader
                  action={
                    <Typography variant="h5">
                      {" "}
                      100 <br /> <small>cards</small>{" "}
                    </Typography>
                  }
                  title="SME+ Subscription "
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    <CheckIcon className={classes.icon} /> $1.2 per user monthly
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <CheckIcon className={classes.icon} /> Customizable card and
                    logo
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <CheckIcon className={classes.icon} /> Fully customizable
                    loading page
                  </Typography>
                </CardContent>
                <Box>
                  <Button
                    className={classes.button}
                    style={{ marginTop: "1rem" }}
                  >
                    $1,440/Y only
                  </Button>
                </Box>
              </Paper>
            </Grid>
            {/* card three */}
            <Grid item>
              <Paper className={classes.card}>
                <CardHeader
                  action={
                    <Typography variant="h5">
                      {" "}
                      200+ <br /> <small>cards</small>{" "}
                    </Typography>
                  }
                  title="Agency Subscription"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    <CheckIcon className={classes.icon} /> $1 per user
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <CheckIcon className={classes.icon} /> Customizable card and
                    logo
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <CheckIcon className={classes.icon} /> Fully customizable
                    loading page
                  </Typography>
                </CardContent>
                <Box>
                  <Button
                    className={classes.button}
                    style={{ marginTop: "1rem" }}
                  >
                    $2400+/Y only
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
