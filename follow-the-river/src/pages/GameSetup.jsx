import React from 'react';
import logo from "../assets/logo.png";
import { Helmet } from "react-helmet";
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const GameSetup = () => {
  return (
    <>
    <Helmet>
      <title>Game Set Up - Follow the River</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <header>
    <IconButton aria-label="go back" sx={{color: '#FF9900', position: 'absolute', transform:'translateY(50%) translateX(50%)',}} component={Link} to="/">
      <ArrowBackIosIcon />
    </IconButton>
      <img id="header" src={ logo } alt="Follow the River App"/>
      <h1 class="hiddenH1" >Game Set Up</h1>
      <div id="subHead">
        <Typography variant="subtitle1" gutterBottom id="center">
          The companion app for Up & Down the River
        </Typography>
      </div>
    </header>
    <main>
      <section>
        <Typography variant="h2" sx={{ width: '100%', textAlign: 'center', color:'#520556', mt: 8 }}>
          Players
        </Typography>
      </section>
      <section>
        <Typography variant="h2" sx={{ width: '100%', textAlign: 'center', color:'#520556', mt: 8 }}>
          Game
        </Typography>
      </section>
    </main>
    </>
  );
}

export default GameSetup;