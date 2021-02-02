import React from "react";
import { CardMedia } from "@material-ui/core";
import { Card, CardContent, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import design1 from "../images/design1.png";
import purity from "../images/purity.png";
import trust from "../images/trust.png";

const font = "'Lora', serif";

const tiers = [
  {
    title: "Guarantee of Purity",
    image: purity,
  },
  {
    title: "Great Designs",
    image: design1,
  },
  {
    title: "Mutual Trust",
    image: trust,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    "@media (max-width:650px)": {
      display: "block",
    },
  },

  title: {
    marginBottom: 10,
    paddingTop: 30,
    fontFamily: font,
    fontSize: "2em",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    height:'26em',
    width:'22em',
    margin: "3em",
    textAlign: "center",
    border: "1px solid #a10618",
    textTransform: "uppercase",
    transition: "0.5s",

    "&:hover": {
      transform: "scale(1.03)",
    },
    "@media (max-width:650px)": {
       marginLeft:'1.4em',
       width:'20em',
    },
  },
}));

export default function HomeCards() {
  const classes = useStyles();

  return (
    <>
          <Typography className={classes.title} >SRI MAATA ASSURES</Typography>

      <Container maxWidth="lg" className={classes.container}>

        {tiers.map((tier) => (
          <Card className={classes.card} key={tier.title}>
            <CardContent style={{ display: "flex", justifyContent: "center" }}>
              <CardMedia
                image={tier.image}
                style={{ height: "14em", width: "14em", margin: 15 }}
              />
            </CardContent>

            <Typography
              variant="h6"
              style={{ fontFamily: font, fontWeight: "bold", padding: 30 }}>
              {tier.title}
            </Typography>
          </Card>
        ))}
      </Container>
    </>
  );
}
