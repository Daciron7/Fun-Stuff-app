import React from 'react'

import warshipInfo from './Warship_stuff/warship_info.json'
import './warshipFacts.css'


import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';






const tirpitzB = Object.values(warshipInfo.data[3667867440].name)
const tirpitzBInfo = Object.values(warshipInfo.data[3667867440].description)

const cali = Object.values(warshipInfo.data[3553572848].name)
const caliInfo = Object.values(warshipInfo.data[3553572848].description)

const rossiya = Object.values(warshipInfo.data[3551475152].name)
const rossiyaInfo = Object.values(warshipInfo.data[3551475152].description)

const ragnarok = Object.values(warshipInfo.data[3363780304].name)
const ragnarokInfo = Object.values(warshipInfo.data[3363780304].description)

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function WarshipFacts() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{tirpitzB}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {tirpitzBInfo}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{cali}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {caliInfo}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>{rossiya}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {rossiyaInfo}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>{ragnarok}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {ragnarokInfo}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


  
