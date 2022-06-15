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
}));


export default function Navbar(){
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
return (
	<>
		<CssBaseline />
		<Toolbar>
			{/* Logo */}
			<div style={{ flexGrow: 1 }}>
				<Link href="/">
					<Logo />
				</Link>
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
					<Link href="/">
						<a className={classes.get}>Gest Started</a>
					</Link>
					<Link href="https://ebcdb.beyin.me/signup">
						<a className={classes.log}>Login</a>
					</Link>
				</div>
			)}
		</Toolbar>
	</>
);

}