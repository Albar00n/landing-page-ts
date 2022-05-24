import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIos";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  div: {
    "@media only screen and (max-width: 600px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  button: {
    border: "1.5px solid #a39f9f",
    background: "#FBFBFB",
    borderRadius: "22px",
    width: "220px",
    height: "51px",
    fontSize: "19px",
    lineHeight: "31px",
    fontFamily: "Poppins",
    textTransform: "none",
    color: "#58696D",
  },
}));


export default function StyleButton() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Button
        className={classes.button}
        endIcon={<ArrowForwardIosSharpIcon />}
        
      >
        Get started
      </Button>
    </div>
  );
}
