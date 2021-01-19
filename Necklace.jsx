import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Card ,CardContent,  CardActions, CardMedia, CssBaseline, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';




const useStyles = makeStyles((theme) => ({
 
  cardGrid: {    
    display:'flex',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  card: {
    height: '270px',
    width:'100%',
    transition: '0.2s',
    '&:hover': {
      transform:'scale(1.03)',
  },
  },

  cardMedia: {
  height: '75%',
  marginBottom:'2%',
  },

  cardContent: {
    flexGrow: 1,
  },


  
}));

export default function Necklace(props) {
  const classes = useStyles();


  return (
    <>
      <CssBaseline />

      <main>
        <Container  maxWidth="md">
                  <Grid container spacing={7} className={classes.cardGrid} >
                        <Grid item  xs={12} sm={6} md={4} >
                           
                       
                             <Card className={classes.card}>

                                  <CardMedia
                                   className={classes.cardMedia}
                                   image={props.pic}
                                   title="Image title"
                                  /> 
                              <CardContent style={{display:'flex'}} >
                                  
                                              <Typography gutterBottom variant="h5" component="h2" className={classes.cardContent}>
                                                         {props.heading}
                                             </Typography>   
                                             <CardActions>
                                     <IconButton size="small" color="primary">
                                             <FavoriteIcon/>
                                     </IconButton>
                                 </CardActions>                                       
                                
</CardContent>
                               

                             </Card>
               
                       </Grid>
  
                   </Grid>
        </Container>
      </main>
     
    </>
  );
}