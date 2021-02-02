import React from "react";
import clsx from "clsx";
import CategoryData from "./CategoryData";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  Button,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { NavLink } from "react-router-dom";

const font = "'Lora', serif";
const drawerwidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(#a10618 10%,#a10618 10%)",
    display: "flex",
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },

  drawerPaper: {
    width: drawerwidth,
  },

  drawerHeader: {
    display: "flex",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  },

  title: {
    fontFamily: font,
    flexGrow: 1,
  },

  span: {
    ["@media (max-width:768px)"]: {
      fontSize: 10.6,
    },
    fontSize: 15,
    color: "#FFDFB9",
  },

  nav: {
    textDecoration: "none",
  },

  link: {
    ["@media (max-width:1000px)"]: {
      display: "none",
    },
    fontSize: 14,
    color: "#FFDFB9",
    marginRight: 50,
    "&:hover": {
      borderBottom: "1px solid #FFDFB9",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" className={classes.title}>
            <Button href="/" style={{ color: "#FFDFB9", fontSize: 25 }}>
              SRI MAATA
            </Button>
            <span className={classes.span}> GOLD JEWELLERY WORKS</span>
          </Typography>

          <div id="navbar">
            <NavLink className={classes.nav} to="/" color="inherit">
              <Button className={classes.link}>Home</Button>
            </NavLink>

            <Button href="#category" className={classes.link}>
              Featured
            </Button>

            <Button href="#footer" className={classes.link}>
              Contact Us
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        transitionDuration={450}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ArrowBackIcon />
            ) : (
              <ArrowForwardIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        <div>
          <Typography
            style={{
              fontFamily: font,
              fontWeight: "bold",
              padding: 6,
              paddingLeft: 50,
            }}>
            CATEGORIES
          </Typography>
        </div>

        <Divider />

        <List>
          {CategoryData.map((text) => (
            <Button href={text.link} key={text.title}>
              {" "}
              <ListItem key={text.title}>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>

                <ListItemText primary={text.title} />
              </ListItem>
            </Button>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
}
