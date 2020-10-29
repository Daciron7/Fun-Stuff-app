import React from 'react'
import Color from 'color';
import warshipInfo from './Warship_stuff/warship_info.json'
import './warshipFacts.css'


import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { useFourThreeCardMediaStyles }  from '@mui-treasury/styles/cardMedia/fourThree';




const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));


const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};




const tirpitzB = Object.values(warshipInfo.data[3667867440].name)
const tirpitzBInfo = Object.values(warshipInfo.data[3667867440].description)

const cali = Object.values(warshipInfo.data[3553572848].name)
const caliInfo = Object.values(warshipInfo.data[3553572848].description)

const rossiya = Object.values(warshipInfo.data[3551475152].name)
const rossiyaInfo = Object.values(warshipInfo.data[3551475152].description)

const ragnarok = Object.values(warshipInfo.data[3363780304].name)
const ragnarokInfo = Object.values(warshipInfo.data[3363780304].description)



export const WarshipFacts = React.memo(function WarshipFacts() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  const styles4 = useStyles({ color: '#34241e' });
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={tirpitzB}
            subtitle={tirpitzBInfo}
            image={
              'https://glossary-wows-global.gcdn.co//icons////vehicle//small//PGSB598_38cafa84763ff00a5ac34e17d885785f994e37deee48725316fc4a9c2bbdbdbb.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={cali}
            subtitle={caliInfo}
            image={
              'https://glossary-wows-global.gcdn.co//icons////vehicle//small//PASB707_5adb831f57bb58011aec94abb7e54ede1cd75c46df3cd092550c165981c6a797.png'
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={rossiya}
            subtitle={rossiyaInfo}
            image={'https://glossary-wows-global.gcdn.co//icons////vehicle//small//PRSB709_feeaaba1335a38aaf854c5410faa50ec0b4842f4044f3c6b16607ef1fa02c98a.png'}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles4}
            title={ragnarok}
            subtitle={ragnarokInfo}
            image={
              'https://glossary-wows-global.gcdn.co//icons////vehicle//small//PJSB888_2e6a4735c51636979cdf0ab8e14458373f38e906671d1f29a858454853f7a1e6.png'
            }
          />
        </Grid>
      </Grid>
    </>
  );
});
export default WarshipFacts       

  
