import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import logo from "../assets/logo.png";
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import { usePlayersContext } from '../PlayersManager';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Confetti from 'react-confetti';

const theme = createTheme({
  palette: {
    primary: {
      main: '#520556',
    },
    secondary: {
      main: '#FF9900',
    },
  },
});

const Results = () => {

  const { players } = usePlayersContext();

  const columns = [
    { field: 'name', headerName: "Player", width: 150, },
    { field: 'score', headerName: "Points", width: 150, },
  ];

  const rows = players.map((player) => ({
    id: player.id,
    name: player.playerName, 
    score: player.score
  }));

  const playerWithHighestScore = players.reduce((prevPlayer, currentPlayer) => {
    return currentPlayer.score > prevPlayer.score ? currentPlayer : prevPlayer;
  }, players[0]);

  useEffect(() => {
    const confettiTimer = setTimeout(() => {
      console.log('Confetti time!');
    }, 1000); 

    return () => clearTimeout(confettiTimer); 
  }, []);

  return (
    <>
    <Helmet>
      <title>Results - Follow the River</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <header>
    <IconButton aria-label="go back" sx={{color: '#FF9900', position: 'absolute', transform:'translateY(50%) translateX(50%)',}} component={Link} to="/game">
      <ArrowBackIosIcon />
    </IconButton>
      <img id="header" src={ logo } alt="Follow the River App"/>
      <h1 className="hiddenH1" >Results</h1>
      <div id="subHead">
        <Typography variant="subtitle1" gutterBottom id="center">
          The companion app for Up & Down the River
        </Typography>
      </div>
    </header>
    <main>
    <ThemeProvider theme={theme}>
      <Typography color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', mt: 8 }}>
        { playerWithHighestScore.playerName } Wins!
      </Typography>
        <div style={{ height: '100%', width: '360px' }}>
          <DataGrid  sx={{my: 4}}
            rows={rows}
            columns={columns}
            sortModel={[
              {
                field: 'score',
                sort: 'desc', 
              },
            ]}
          />
        </div>
        <Button component={Link} to="/" color="primary" variant="contained" sx={{ my: 4 }}>Done</Button>
    </ThemeProvider>
    </main>
    <Confetti />
    </>
  );
}

export default Results;