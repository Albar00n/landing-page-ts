import React from "react";
import { makeStyles ,Theme,createStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Vector from "../../public/vector1.png";
import Vector2 from "../../public/vector2.png";
import Flat from "../../public/flat.png";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  div: {
    padding: '1.2rem',
    textAlign: 'center',
    margin: '2rem auto',

  },
  box: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
// "@media only screen and (max-width: 590px)":{
// width:"30%"
// },
  },
  box1: {
    width: '85%',
    display: 'flex',
    justifyContent: 'center',

  },
  typo: {

    textAlign: 'left',
    margin: '1rem',
    fontStyle: 'normal',
    lineHeight: '115%',
    padding: '0.7rem',
    color: '#252d38',
    fontWeight: 400,
    fontSize: '28px',

//     "@media only screen and (max-width: 600px)":{
// maxWidth:"112%",
// border:"1px solid"
//     },
//     '@media only screen and (max-width: 768px)' :{
//       width:"80%",
//     },
//     "@media only screen and (min-width: 992px)":{
//       width:"100%",
//     },
//     "@media only screen and (min-width: 1200px)":{
//       width:"100%",
//     }
    },
    typo2: {
      textAlign: 'left',
      margin: '1rem',
      fontStyle: 'normal',
      lineHeight: '115%',
      padding: '0.7rem',
      color: '#252d38',
      fontWeight: 400,
      fontSize: '16px',
      // '@media only screen and (max-width: 600px)' :{
      //   width: '90%',
      // },
      // "@media only screen and (max-width: 768px)":{
      //   width: '80%'
      // }
      },


  grid: {

  },
}));

export default function Beyin() {
  const classes = useStyles();

  return (
    <div id="features">
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item sm={12} md={6} lg={6}>
          {/* card one */}
          <div className={classes.div}>
            <Grid container item spacing={8} sm={12} md={12} lg={12}>
              <Grid container className={classes.grid}>
                {/* card one one */}
                <div className={classes.box}>
                  <Image alt="icon heart" src={Vector} />
                </div>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                  <Grid container style={{ marginLeft: "1.4rem" }}>
                    <Grid item>
                      <Typography variant="h5" className={classes.typo}>
                        it keeps a lasting impression every time
                      </Typography>
                      <Typography variant="body1" className={classes.typo2}>
                        Be memorable! leave a card that can be experienced again
                        and again long after you’re gone.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* card two  */}
              <Grid container className={classes.grid}>
                <div className={classes.box}>
                  <Image alt="icon infinity" src={Vector2} />
                </div>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                  <Grid container style={{ marginLeft: "0.9rem" }}>
                    <Grid item>
                      <Typography variant="h5" className={classes.typo}>
                        Unlimited copies and views
                      </Typography>
                      <Typography variant="body1" className={classes.typo2}>
                        Distribute as many copies as you need, no strings
                        attached!
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={5}>
          <div className={classes.div}>
            <Grid container>
              <Grid container className={classes.grid}>
                {/* <Box> */}
                <Grid className={classes.box1}>
                  <Image alt="icon heart" src={Flat} />
                </Grid>
                {/* </Box> */}
              </Grid>
              <Grid item container className={classes.grid}>
                <Grid item sm={10} md={8} lg={10} container>
                  <Grid item container>
                    <Grid item>
                      <Typography variant="h5" className={classes.typo}>
                        Works on all Smart devices
                      </Typography>
                      <Typography variant="body2" className={classes.typo2}>
                      The EBC card works on all popular smart devices like Android and IOS as long as it can run Chrome, Edge or Safari.

                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
