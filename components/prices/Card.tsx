import MediaCard from "./MediaCards";
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
// import Cardt from "./Cardt";
import MediaCa from "./MediaTow";
// import Grid from "@material-ui/core/Grid";

const mediaCard = [
  {
    title: "SME+ Subscription",
    num: "100-200",
    simTitle: "cards",
    description: "$1.2 per user monthly",
    towDescription: "Customizable card and logo",
    tow: "Fully customizable loading page",
    price: "$120/M only",
  },
  {
    title: "Agency Subscription",
    num: "200+",
    simTitle: "cards",
    description: "$1 per user",
    towDescription: "Customizable card and logo",
    tow: "Fully customizable loading page",
    price: "$200/M only",
  },
];

const mediaCards = [
  {
    title: "Personal Subscription",
    num: "1-9",
    simTitle: "cards",
    description: "$2 per card monthly",
    towDescription: "Customizable card and logo",
    price: "$2-$18/M only",
  },
  {
    title: "Startup Subscription ",
    num: "10-50",
    simTitle: "cards",
    description: "$1.5 per card monthly",
    towDescription: "Customizable card and logo",
    price: "$15/M only",
  },
  {
    title: "SME\n\b Subscription",
    num: "50-100",
    simTitle: "cards",
    description: "$1.2 per user monthly",
    towDescription: "Customizable card and logo",
    price: "$60/M only",
  },
];
export default function Cards() {
  //   const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <>
          {mediaCards.map((mediaCard, i) => {
            return <MediaCard key={i} {...mediaCard} />;
          })}
          {mediaCard.map((mediaCa, i) => {
            return <MediaCa key={i} {...mediaCa} />;
          })}

          {/* <Cardt /> */}
        </>
      </Grid>
    </div>
  );
}
