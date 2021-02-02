import React from "react";
import "../App.css";
import HomeCards from "./HomeCards";
import Category from "./CategoryCarousel";
import { Grow } from "@material-ui/core";
import { CssBaseline, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../images/pngfind.com-bangles-images-png-5650527.png";

const font = "'Lora', serif";

const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    background: "#eee",
    display: "flex",
    marginTop: 40,
    marginBottom: 30,
    padding: 35,
    ["@media (max-width:650px)"]: {
      display: "block",
    },
  },

  heading: {
    fontSize: "2.7em",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: font,
  },

  subheading: {
    fontSize: "1.18em",
    fontFamily: font,
    marginBottom: 40,
  },

  button: {
    display: "flex",
  },
  a: {
    color: "#000",
    fontSize: "1.22em",
    border: "2px solid #000",
    borderRadius: 6,
    padding: 10,
    marginRight: "8%",

    "&:hover": {
      color: "#fff",
      backgroundColor: "#a10618",
      border: "2px solid #a10618",
      transition: "0.5s",
    },
  },

  img: {
    paddingTop: "5%",
    position: "relative",
    left: "30%",
    width: "25%",
    ["@media (max-width:650px)"]: {
      display: "none",
    },
  },

}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Grow in={true} timeout={1500}>
        <Container maxWidth="lg" className={classes.backgroundContainer}>
          <div>
            <Typography variant="h3" className={classes.heading}>
              KAMAREDDY'S TOP
              <br /> JEWELLERS
            </Typography>

            <Typography variant="h6" className={classes.subheading}>
              THE MOST TRUSTED JEWELLERS IN KAMAREDDY
            </Typography>
            <div className={classes.button}>
              <Button href="#category" className={classes.a}>
                EXPLORE
              </Button>

              <Button href="#footer" className={classes.a}>
                ABOUT US
              </Button>
            </div>
          </div>

          <img src={pic} className={classes.img} alt=" " />
        </Container>
      </Grow>

      <Category />


      <HomeCards />
    </>
  );
}
