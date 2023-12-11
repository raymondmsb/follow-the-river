import React from 'react';
import logo from "../assets/logo.png";
import { Helmet } from "react-helmet";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home - Follow the River</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <header>
      <img id="header" src={ logo } alt="Follow the River App"/>
      <h1 class="hiddenH1" >Follow the River App</h1>
      <div id="subHead">
        <Typography variant="subtitle1" gutterBottom id="center">
          The companion app for Up & Down the River
        </Typography>
      </div>
    </header>
    <main>
      <Box sx={{ width: '80%', maxWidth: 360, marginLeft: 'auto', marginRight: 'auto',}}>
        <List>
          <ListItem disablePadding sx={{ mt: 8 }} component={Link} to="/gameSetup">
            <ListItemButton divider sx={{borderBottomColor: '#520556',}}>
              <ListItemText primary="New Game" />
              <ListItemIcon>
                <ArrowForwardIosIcon sx={{color: '#FF9900',}}/>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mt: 8 }} component={Link} to="/howToPlay">
            <ListItemButton divider  sx={{borderBottomColor: '#520556',}}>
              <ListItemText primary="How To Play" />
              <ListItemIcon>
                <ArrowForwardIosIcon  sx={{color: '#FF9900',}} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mt: 8 }} component={Link} to="/stats">
            <ListItemButton divider  sx={{borderBottomColor: '#520556',}}>
              <ListItemText primary="My Statistics" />
              <ListItemIcon>
                <ArrowForwardIosIcon  sx={{color: '#FF9900',}} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </main>
    </>
  );
}

export default Home;