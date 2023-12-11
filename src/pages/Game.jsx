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
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { usePlayersContext } from '../PlayersManager';
import { DataGrid } from '@mui/x-data-grid';
import Badge from '@mui/material/Badge';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useCardCountContext } from './GameSetup';
import { useContext } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';




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

let done = false;


const Game = () => { 
  const { cardCount, handleCardCountChange } = useContext(useCardCountContext);

  const { players, setDealer, undoDealer, updatePlayers } = usePlayersContext();

  const initialRows = players.map((player) => ({
    id: player.id,
    name: player.playerName,
    bid: 0,
    won: false, 
    dealer: player.dealer,
  }));

  const initialLeaderboardRows = players.map((player) => ({
    id: player.id,
    name: player.playerName, 
    score: 0
  }));

  let [round, setRound] = useState(1);
    
  const [rows, setRows] = useState([]);

  const [leaderboardRows, setLeaderboardRows] = useState([]);

  useEffect(() => {
    setLeaderboardRows(initialLeaderboardRows);
  }, []);

  useEffect(() => {
    setRows(initialRows);
  }, [players]);
  
  

  const handleCheckboxChange = (params) => {
    const updatedRows = rows.map((row) =>
      row.id === params.id ? { ...row, won: !row.won } : row
    );
    setRows(updatedRows);
  };

  const handleBidChange = (params, event) => {
    const updatedRows = rows.map((row) =>
      row.id === params.id ? { ...row, bid: parseInt(event.target.value) || 0 } : row
    );
    setRows(updatedRows);
  };

  const leaderboardColumns = [
    { field: 'name', headerName: 'Player', width: 150, },
    { field: 'score', headerName: 'Points', width: 150, },
  ];

  const columns = [
    { field: 'name', headerName: 'Player', width: 150, renderCell: (params) => (
      <>
        {params.row.dealer ? (
          <span>{params.value} 
          &nbsp;&nbsp;<Badge color="secondary" variant="dot">
          </Badge></span>
        ) : (
          <span>{params.value}</span>
        )}
      </>
    ) },
    { field: 'bid', headerName: 'Bid Amount', width: 150, editable: true, align: "center", headerAlign: "center", renderCell: (params) => (
      <>
      <IconButton onClick={() => handleBidChange(params, { target: { value: params.value - 1 } })}>
        <RemoveIcon />
      </IconButton>
      <span>{params.value}</span>
      <IconButton onClick={() => handleBidChange(params, { target: { value: params.value + 1 } })}>
        <AddIcon />
      </IconButton>
      </>
    ),},
    { field: 'won', headerName: 'Won?', width: 150, renderCell: (params) => (
      <Checkbox
        checked={params.value}
        color="secondary"
        inputProps={{ 'aria-label': 'checkbox' }}
        onChange={() => handleCheckboxChange(params)}
      />
    ), },
  ];

  const removeDealer = (prevPlayers) => {
      prevPlayers.map((player) => ({
        ...player,
        dealer: false,
      }))
  };
 
  const nextRound = (event) => {
    event.preventDefault();
    if (round === ((cardCount * 2)-2)) {
      done = true;
    }
    setRound((prevRound) => {
      let currentDealerIndex = players.findIndex((player) => player.dealer);
      const tempPlayers = [...players];
      tempPlayers[currentDealerIndex].dealer = false;
      let newDealerIndex = (currentDealerIndex + 1) % tempPlayers.length;
      tempPlayers[newDealerIndex].dealer = true;
      let newScore = 0;


      // Update scores based on the bids
      const updatedPlayers = tempPlayers.map((player) => {
        const rowData = rows.find((row) => row.id === player.id);

      
        if (!rowData) {
          console.error(`No row data found for player with id ${player.id}`);
          return player;
        }
      
        // Update the score by adding the bid points
        if (rowData.won) {
          newScore = player.score + 10 + rowData.bid;
        } else {
          newScore = player.score;
        }

        return {
          ...player,
          score: newScore,
        };
      });

      const newLeaderboardRows = updatedPlayers.map((player) => ({
        id: player.id,
        name: player.playerName, 
        score: player.score
      }));

      setLeaderboardRows(newLeaderboardRows);

    // Update scores in the context
      updatePlayers(updatedPlayers);

      return prevRound + 1;
    });
  }
  
  return (
    <>
    <Helmet>
      <title>Game - Follow the River</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <header>
    <IconButton aria-label="go back" sx={{color: '#FF9900', position: 'absolute', transform:'translateY(50%) translateX(50%)',}} component={Link} to="/gameSetup">
      <ArrowBackIosIcon />
    </IconButton>
      <img id="header" src={ logo } alt="Follow the River App"/>
      <h1 className="hiddenH1" >Game Play</h1>
      <div id="subHead">
        <Typography variant="subtitle1" gutterBottom id="center">
          The companion app for Up & Down the River
        </Typography>
      </div>
    </header>
    <main>
    <ThemeProvider theme={theme}>
      <section>
        <form onSubmit={nextRound}>
          <Typography color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', mt: 8 }}>
            Round { round }
          </Typography>
          <div style={{ height: '100%', width: '360px' }}>
          <DataGrid  sx={{mt: 4}}
            rows={rows}
            columns={columns}
          />
          </div>
          <Button id="nextButton" color="primary" type="submit" variant="contained" style={{ display: done ? 'none' : 'block' }} sx={{ my: 4 }}>Next Round</Button>
          <Button component={Link} to="/results" id="endButton" color="primary" type="submit" variant="contained" style={{ display: done ? 'block' : 'none' }} sx={{ my: 4 }}>Finish Game</Button>
        </form>
      </section>
      <section>
        <Typography color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', mt: 8 }}>
          Leaderboard
        </Typography>
        <div style={{ height: '100%', width: '360px' }}>
          <DataGrid  sx={{my: 4}}
            rows={leaderboardRows}
            columns={leaderboardColumns}
            sortModel={[
              {
                field: 'score',
                sort: 'desc', 
              },
            ]}
          />
          </div>
      </section>
    </ThemeProvider>
    </main>
    </>
  );
}

export default Game;