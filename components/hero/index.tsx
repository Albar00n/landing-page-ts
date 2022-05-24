import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography ,makeStyles,Theme,createStyles} from "@material-ui/core";
import StyleButton from "../button/StyleButton";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      box:{
        margin: '5rem auto',
        borderRadius: '30px'
      },
      boxx:{
        textAlign: 'left',
        margin: '2rem auto',

        '@media only screen and (min-width: 1200px)': {
              width: '90%'
          },
      },
    link: {
            textDecoration: "none",
            color: "#1e2d3d",
            fontSize: "14px",
            lineHeight: '21px',
            marginLeft: theme.spacing(7),
          },
          typo:{
            marginTop: '2rem',

            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '36px',
            lineHeight: '54px',
            width: '80%',
            "@media only screen and (max-width: 600px)":{
                width: '110%',

            },
          },
          typo2:{
            marginTop: '2rem',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '24px',
            width: '97%',
            color: '#1e2d3d',
            "@media only screen and (max-width: 600px)":{
                width: '100%',

            },
          },
          button :{
            marginLeft: '1px',
            border: '1px solid gray',
            borderRadius: '23rem',
          },
          video :{
            maxWidth: '100%',
            maxHeight: '100%',
            filter: 'drop-shadow(0px 104px 134px rgba(0, 0, 0, 0.11))',
            borderRadius: '50px',
            "@media only screen and (max-width: 600px)":{
                maxWidth: '100%',
                maxHeight: '100%',


            },
            '@media only screen and (min-width: 300px)': {
                  maxHeight: '95%',
                  maxWidth: '100%',
               },
            },
          grid: {
            height: '100%',
            width: '80%',
            "@media only screen and (max-width: 600px)":{
                height: '100%',
                width: '100%',
                borderRadius: '10px',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                margin: '2rem 0rem',
            }
          }
}));

export default function Hero() {
const classes = useStyles();

  return (
    <div id="hero" className={classes.box}>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item sm={7} md={6} lg={7}>
          <div className={classes.boxx}>
            <Typography    variant="h4" className={classes.typo}>
              Get the most effective business
              card ever for only 1$/month
            </Typography>
            <Typography
                className={classes.typo2}
              variant="body1"
              style={{ margin: "2rem 1px"}}>
              Extended Business Card Platform allows you to create extended
              business cards for you, your company, or clients in no time and
              without complex steps for as low as $1 per month!
            </Typography>
            {/* button */}
          <Link href="https://ebcdb.beyin.me/signup">
          <a className={classes.link}>
          <StyleButton />
          </a>
          </Link>
          </div>
          </Grid>

        {/* video */}
        <Grid
        item
          container
          alignItems="center"
          justifyContent="center"
          sm={5}
          md={4}
          lg={3}
        >
          <Grid className={classes.grid}>
            <video
              controls
              autoPlay
              src="./video.mp4"
              className={classes.video}
            />
          </Grid>
        </Grid>
        </Grid>
    </div>
  );
}
