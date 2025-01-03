import React, { useEffect } from 'react';
import { dividerClasses, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import './events.css';
import Box from '@mui/material/Box';
import Meteors from "@/components/ui/meteors";


export function Initial() {
  return (
    <div sx={{height:'100vh',alignItems:'center',justifyContent:'center',bgColor:"black"}}>
      <Meteors number={40} />
      <span>
        <Typography gutterBottom variant="h1" component="div" sx={{color:'white',textAlign: 'left',fontWeight:'3000'}}>Our Events</Typography>
      </span>
      <Meteors number={40} />
    </div>
  );
}
