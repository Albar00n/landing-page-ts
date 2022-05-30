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
    width: "295px",
    height: "306px",
    margin: "10px",

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

interface Props {
  title: string;
  num: string;
  simTitle: string;
  description: string;
  towDescription: string;
  price: string;
  tow: string;
}

export default function MediaCards({
  title,
  num,
  simTitle,
  description,
  towDescription,
  price,
}) {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Box>
          <Grid>
            {/* card one */}
            <Grid item>
              <Card className={classes.card}>
                <CardHeader
                  action={
                    <Typography component="div" variant="h5">
                      {" "}
                      {num} <br /> <small>{simTitle}</small>{" "}
                    </Typography>
                  }
                  title={title}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <CheckIcon className={classes.icon} /> {description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <CheckIcon className={classes.icon} /> {towDescription}
                  </Typography>
                </CardContent>
                <Box>
                  <Button className={classes.button}>{price}</Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
