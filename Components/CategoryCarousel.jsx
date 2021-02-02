import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, Typography, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CategoryData from "./CategoryData";

const font = "'Lora', serif";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "#a10618",
    marginBottom: 40,
    paddingBottom: 40,
  },

  title: {
    color: "#FFDFB9",
    marginBottom: 30,
    paddingTop: 30,
    fontFamily: font,
    fontSize: "2em",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    padding:20,
    height: "30em",
    width: "90em",
    display: "flex",
    alignItems: "center",
    "@media (max-width:650px)": {
      display: "block",
    },
  },

  text: {
    marginRight: "24em",
    marginLeft: "16em",
    paddingBottom: "5em",

    "@media (max-width:650px)": {
      marginLeft: "5em",
    },
  },

  CategoryTitle: {
    fontSize: 35,
    paddingBottom: 5,
    fontFamily: font,
    "@media (max-width:650px)": {
      fontSize: 23,
    },
  },

  button: {
    color: "#000",
    fontSize: "1.18em",
    border: "2px solid #000",
    borderRadius: 5,

    "&:hover": {
      color: "#fff",
      background: "#a10618",
      border: "2px solid #a10618",
      transition: "0.5s",
    },
    "@media (max-width:650px)": {
      fontSize: '0.95em',
      marginLeft:'1.5em'
    },
  },

  CategoryImage: {
    border: "2px solid #a10618",
    borderRadius: 5,
    height: 280,
    width: 280,
    "@media (max-width:650px)": {
      border: "none",
      height: 180,
      width: 180,
      marginLeft: "3em",

    },
  },
}));

export default function Category() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.background}>
      <Typography className={classes.title} id="category">
        FEATURED PRODUCTS
      </Typography>
      <Container maxWidth="lg">
        <Carousel
          autoPlay
          animation="slide"
          timeout={1300}
          navButtonsAlwaysVisible>
          {CategoryData.map((item) => (
            <Card className={classes.card} key={item.title}>
              <div className={classes.text}>
                <Typography key={item.title} className={classes.CategoryTitle}>
                  {item.title}
                </Typography>

                <Button href={item.link} className={classes.button}>
                  MORE
                </Button>
              </div>

              <img className={classes.CategoryImage} src={item.imgsrc} alt="" />
            </Card>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
}
