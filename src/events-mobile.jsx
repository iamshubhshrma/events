import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import './events.css';
import Box from '@mui/material/Box';
import CardEvent from './card-events';
import Meteors from "@/components/ui/meteors";
import Stack from '@mui/material/Stack';
import CardMobile from './cards-mobile';

const EventsMobile = () => {
  return (
    <div className="eventsMobile" sx={{margin:'auto', width:'100%'}}>
        <Stack direction="column" spacing={2}>
   
        <CardMobile eventName="E-Summit 24" eventDescription="E-Summit '24 by E-Cell VIT Bhopal was a landmark event celebrating innovation, entrepreneurship, and strategic thinking. Highlights included a legendary speaker session with Vijender Singh Chauhan, a Paper Trading Competition, an IPL Auction challenge, a dynamic Case Study Competition, and a Product Design Competition powered by Notion. The event also hosted venture capitalists, fostering groundbreaking ideas, insightful discussions, and unparalleled networking opportunities, making it a hub for entrepreneurial excellence." eventImage="./1.png" />
 
        <CardMobile eventName="Parichay 24" eventDescription="Parichay 24 by E-Cell VIT Bhopal brought together entrepreneurial leaders who shared their inspiring journeys and expertise. Highlights included Mitresh Sharma, Founder of First Bud Organics, and Srijan Mehrotra, Founder of Model Verse, both Shark Tank India alumni, along with Punit G, TEDx speaker and CEO of Arth Nirmiti, and Devesh Bochre, Founder of Vold Energy Drink. The event also introduced exciting opportunities like startup pitching, workshops, quizzes, networking with industry leaders, and the Eureka IIT Bombay Zonal Round, fostering innovation and entrepreneurial growth." eventImage="./2.png" />

        <CardMobile eventName="Parichay 22" eventDescription="Parichay '22, organized by the E-Cell at VIT Bhopal, was a dynamic event designed to introduce students to the world of entrepreneurship and innovation. Featuring insightful sessions, interactive activities, and inspiring talks by industry leaders, the event provided a platform for students to network, learn, and ignite their entrepreneurial spirit." eventImage="./3.png" />
  
        <CardMobile eventName="Prachar" eventDescription="Prachar 2022, hosted by E-Cell VIT Bhopal, was an insightful and engaging event centered on creative marketing, featuring interactive quizzes, stand-up acts, and expert discussions. The event highlighted the power of marketing in building brands, with keynote addresses by industry leaders, including Mr. Swapnil Tripathi (Co-Founder & CRO, We360.ai), Ms. Ankita Saxena (Marketing and Strategy Expert, ex-Walmart), and Mr. Kaif Khan (Stand-Up Comedian), making it an inspiring and memorable experience for all attendees." eventImage="./4.png" />
   
        <CardMobile eventName="Arohan" eventDescription="Aarohan '23 was a vibrant business extravaganza hosted by E-Cell VIT Bhopal, featuring a Business Case Competition, an insightful talk by Rakhi Pal (Co-Founder of EventBeep, TEDx Speaker, and Shark Tank India participant), and the Ultimate Business Hunt. The event celebrated innovation, entrepreneurship, and collaboration, offering participants an enriching and memorable experience." eventImage="./5.png" />
     
        </Stack>
    
    </div>
  );
};

export default EventsMobile;
