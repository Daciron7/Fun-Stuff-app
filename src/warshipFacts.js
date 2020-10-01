import React from 'react'
//import Axios from 'axios'
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



//const fetchBattleships = () => {
//  Axios
//    .get('https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=29d1975c9a6318643adf2940214e7b5f&type=Battleship',  {
//      headers: { 'x-api-key': process.env.REACT_APP_WORLD_OF_WARSHIPS_API_KEY}
//    })
//    .then(function (response) {
//      setBattleshipData({
//        warships: response.data.results
//      })
        
//    })
//}




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
            height="150"
            image="https://glossary-wows-global.gcdn.co//icons////vehicle//medium//PGSB910_747c5b326961714a84b5322db24e0fa968dd0df3f61432da3f48bd42a61c00ed.png"
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

  
