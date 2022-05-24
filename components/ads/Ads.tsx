import MuiGrid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Group from "../../public/group.png";
import Vector from "../../public/vector.png";
import Morpheus from "../../public/morpheus.png";
import Samsung from "../../public/samsung.png";
import Monday from "../../public/monday.png";
import Segment from "../../public/segment.png";
import Image from "next/image";

function Ads() {
  return (
    <div style={{
        textAlign: "center",
        margin: "4rem auto",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "24px",
        lineHeight: "36px",
      }}
    >
      <Grid>
        <Typography
          variant="h6"
          style={{
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 300,

            lineHeight: "36px",
            margin: "2rem auto",
          }}
        >
          Companies we work with!
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Image src={Group} alt="Group image" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Image src={Vector} alt="oracle image" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Image src={Morpheus} alt="Morpheus image" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Image src={Samsung} alt="Samsung image" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Image src={Monday} alt="Monday image" />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Image src={Segment} alt="Segment image" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ads;
