import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const font = "'Lora', serif";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#a10618",
    fontFamily: font,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color: "#FFDFB9",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

  contact: {
    color: "#FFDFB9",
    background: "#a10618",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div id="footer" className={classes.footer}>
      <Container maxWidth="lg" component="footer">
        <Grid container justify="space-between">
          <Grid item xs={5} sm={4}>
            <Typography style={{ fontFamily: font }} variant="body2">
              ADDRESS:
            </Typography>

            <Typography variant="caption" style={{ fontFamily: font }}>
              SHOP NO. 1-7-25, OLD BANK STREET, BANGARU VEEDHI, TILAK ROAD,
              KAMAREDDY-503 111
            </Typography>
          </Grid>

          <Grid item xs={7} sm={2}>
            <Accordion className={classes.contact}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#FFDFB9" }} />}>
                <Typography variant="body2" style={{ fontFamily: font }}>
                  CONTACT US
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>+91 98493 46061</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
