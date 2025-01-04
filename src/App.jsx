import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './events.jsx';
import Events from './events.jsx';
import { Initial } from './initial';
import Meteors from "@/components/ui/meteors";
import EventsMobile from './events-mobile';
import { useMediaQuery, CssBaseline , GlobalStyles } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const isMobile = useMediaQuery("(max-width:430px)");

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "black",
            minWidth : '430px'
          },
        }}
      />
      <Initial />
      <Meteors number={40} />
      {/* {isMobile ? <EventsMobile /> : <Events />} */}
      <EventsMobile />
    
    </>
  )
}

export default App
