import React, { useState } from "react";
import {
  Toolbar,
  CssBaseline,
  useMediaQuery,
  Grid,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@material-ui/core";
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme,
} from "@material-ui/core/styles";
import Link from "next/link";
import Logo from "../logo/index";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      fontFamily: "Poppins",
      textDecoration: "none",
      fontStyle: "normal",
      fontWeight: 300,
      color: "#1e2d3d",
      fontSize: "14px",
      lineHeight: "21px",
      marginLeft: theme.spacing(6),
    },
    button: {
      margin: "auto 7rem",
      left: "-3rem",
    },
    div: {
      width: "100%",
    },
    div1: {
      display: "flex",
      justifyContent: "center",
    },
    div2: {
      position: "relative",
      left: "-2rem",
    },
    log: {
      border: "1px solid #e3e3e3",
      borderRadius: "14rem",
      textTransform: "none",
      fontWeight: 400,
      // marginLeft: "1rem",
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "21px",
      textDecoration: "none",
      padding: "8px 3.5rem",
      color: "#58696d",
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

    get: {
      // marginLeft: "1rem",
      border: "1px solid #fff",
      borderRadius: "24px",
      textDecoration: "none",
      padding: "8px 2rem",
      color: "#1e2d3d",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "21px",
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
		<div className={classes.div}>
			<CssBaseline />
			<Toolbar>
				{/* Logo */}
				<div style={{ flexGrow: 1 }}>
					<a href="/">

						<Logo />
					</a>
				</div>
				{isMobile ? (
					// Icon
					<>
						<Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
							<List>
								<ListItem onClick={() => setOpenDrawer(false)}>
									<ListItemText>
										<Link href="/">
											<a className={classes.link}>Home</a>
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem onClick={() => setOpenDrawer(false)}>
									<ListItemText>
										<Link href="#hero">
											<a className={classes.link}>About</a>
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem onClick={() => setOpenDrawer(false)}>
									<ListItemText>
										<Link href="#work">
											<a className={classes.link}>How it works</a>
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem onClick={() => setOpenDrawer(false)}>
									<ListItemText>
										<Link href="#features">
											<a className={classes.link}>Features</a>
										</Link>
									</ListItemText>
								</ListItem>
								<ListItem onClick={() => setOpenDrawer(false)}>
									<ListItemText>
										<Link href="#price">
											<a className={classes.link}>Prices</a>
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
					<div className={classes.div1}>
						<div className={classes.div2}>
							<Link href="/">
								<a className={classes.link}>Home</a>
							</Link>
							<Link href="#hero">
								<a className={classes.link}>About</a>
							</Link>
							<Link href="#work">
								<a className={classes.link}>How it works</a>
							</Link>
							<Link href="#features">
								<a className={classes.link}>Features</a>
							</Link>
							<Link href="#price">
								<a className={classes.link}>Prices</a>
							</Link>
						</div>
						<div className={classes.button}>
							<Link href="https://ebcdb.beyin.me/signup">
								<a className={classes.get}>Get Started</a>
							</Link>

							<Link href="#">
								<a className={classes.log}>Login</a>
							</Link>
						</div>
					</div>
				)}
			</Toolbar>
		</div>
	);
}
