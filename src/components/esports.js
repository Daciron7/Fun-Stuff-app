import React from 'react'
//import warshipInfo from './Warship_stuff/warship_info.json'
import '../esports.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: blueGrey,
  },
  media: {
    height: 140,
  },
});



export default function Esports() {
  const classes = useStyles();
  


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='TeamLogo'
          image={''}
          title={''}
          />
          <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {''}
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
            
      </CardActions>
    </Card>
  );
}





