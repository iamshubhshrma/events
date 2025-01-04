import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import './events.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CardMobile = (props) => {
  return (
    <Card sx={{ maxWidth: 345 , bgcolor : 'black', m:'auto' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.eventImage}
      />
      <CardContent>
        <Accordion sx={{ bgcolor: 'black', color: 'white',textAlign: 'justify' }}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon sx={{color:'white'}} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{color:'white'}}
            >
              <Typography component="span">{props.eventName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {props.eventDescription}
              </Typography>
            </AccordionDetails>
        </Accordion>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{bgcolor:"purple"}}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardMobile;
