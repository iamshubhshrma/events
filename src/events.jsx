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

const Events = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");
    console.log("hello there");

    // Horizontal scrolling animation
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=8000",
        // snap: 1 / (sections.length - 1),
        markers: false,
      },
    });

    console.log(1 / (sections.length - 1));

    // Animating individual sections
    sections.forEach((section) => {
      let text = section.querySelectorAll(".anim");

      if (text.length === 0) return; // Skip if no text elements

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          markers: true,
        },
      });
    });

    // Clean up function to remove ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div className="wrapper">
    
      <div className="container scrollx gallery-wrap">
        <section>
        <CardEvent eventName="E-Summit 24" eventDescription="E-Summit '24 by E-Cell VIT Bhopal was a landmark event celebrating innovation, entrepreneurship, and strategic thinking. Highlights included a legendary speaker session with Vijender Singh Chauhan, a Paper Trading Competition, an IPL Auction challenge, a dynamic Case Study Competition, and a Product Design Competition powered by Notion. The event also hosted venture capitalists, fostering groundbreaking ideas, insightful discussions, and unparalleled networking opportunities, making it a hub for entrepreneurial excellence." eventImage="./1.png" />
        </section>
        <section>
        <CardEvent eventName="Parichay 24" eventDescription="Parichay 24 by E-Cell VIT Bhopal brought together entrepreneurial leaders who shared their inspiring journeys and expertise. Highlights included Mitresh Sharma, Founder of First Bud Organics, and Srijan Mehrotra, Founder of Model Verse, both Shark Tank India alumni, along with Punit G, TEDx speaker and CEO of Arth Nirmiti, and Devesh Bochre, Founder of Vold Energy Drink. The event also introduced exciting opportunities like startup pitching, workshops, quizzes, networking with industry leaders, and the Eureka IIT Bombay Zonal Round, fostering innovation and entrepreneurial growth." eventImage="./2.png" />
        </section>
        <section>
        <CardEvent eventName="Parichay 22" eventDescription="Parichay '22, organized by the E-Cell at VIT Bhopal, was a dynamic event designed to introduce students to the world of entrepreneurship and innovation. Featuring insightful sessions, interactive activities, and inspiring talks by industry leaders, the event provided a platform for students to network, learn, and ignite their entrepreneurial spirit." eventImage="./3.png" />
        </section>
        <section>
        <CardEvent eventName="Prachar" eventDescription="Prachar 2022, hosted by E-Cell VIT Bhopal, was an insightful and engaging event centered on creative marketing, featuring interactive quizzes, stand-up acts, and expert discussions. The event highlighted the power of marketing in building brands, with keynote addresses by industry leaders, including Mr. Swapnil Tripathi (Co-Founder & CRO, We360.ai), Ms. Ankita Saxena (Marketing and Strategy Expert, ex-Walmart), and Mr. Kaif Khan (Stand-Up Comedian), making it an inspiring and memorable experience for all attendees." eventImage="./4.png" />
        </section>
        <section>
        <CardEvent eventName="Arohan" eventDescription="Aarohan '23 was a vibrant business extravaganza hosted by E-Cell VIT Bhopal, featuring a Business Case Competition, an insightful talk by Rakhi Pal (Co-Founder of EventBeep, TEDx Speaker, and Shark Tank India participant), and the Ultimate Business Hunt. The event celebrated innovation, entrepreneurship, and collaboration, offering participants an enriching and memorable experience." eventImage="./5.png" />
        </section>

      </div>
    </div>
  );
};

export default Events;
