import React,{ useState } from "react";
import {   Toolbar,
    CssBaseline,
    useMediaQuery,
    Grid,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Box} from "@material-ui/core";
import { makeStyles, Theme, createStyles, useTheme } from "@material-ui/core/styles";
import Link from "next/link";
import Logo from "../logo/index"
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
            textDecoration: "none",
            color: "#1e2d3d",
            fontSize: "14px",
            lineHeight: '21px',
            marginLeft: theme.spacing(7),
          },
}));


export default function Navbar(){
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
return(

<>
<CssBaseline />
<Toolbar>
  {/* Logo */}
  <div style={{flexGrow:1}}>
    <Logo />
  </div>
  {isMobile ? (
    // Icon
    <>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </ListItemText>
              </ListItem>
              </List>
              </Drawer>
              <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        // className={style.icon}
      >
        <MenuIcon />
      </IconButton>
              </>
  ) : (
    <div>
       <Link href="/">
        <a className={classes.link}>Home</a>
      </Link>
    </div>
  )}
</Toolbar>
</>

)

}