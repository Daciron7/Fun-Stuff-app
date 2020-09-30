import React from 'react'
import warshipInfo from './Warship_stuff/warship_info.json'
import './warshipFacts.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    
  });

const kurfurst = Object.values(warshipInfo.data[3340711728].name)
const kurfurstInfo = Object.values(warshipInfo.data[3340711728].description)

//const cali = Object.values(warshipInfo.data[3553572848].name)


            
export default function ImgMediaCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Grosser Kurfurst"
            height="140"
            image="./images/kurfurst.png"
            title="Grosser Kurfurst"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {kurfurst}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {kurfurstInfo}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>

    );
  }

  
