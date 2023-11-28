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
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { ListItem } from '@mui/material';
import List from '@mui/material/List';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { usePlayersContext } from '../PlayersManager';
import { DataGrid } from '@mui/x-data-grid';
import Badge from '@mui/material/Badge';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';


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

const Game = () => { 
  const { players } = usePlayersContext();

  let [round, setRound] = useState(1);
    
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const initialRows = players.map((player) => ({
      id: player.id,
      name: player.playerName,
      bid: 0,
      won: false, 
      dealer: player.dealer,
    }));

    setRows(initialRows);
  }, [players]);

  const handleCheckboxChange = (params) => {
    const updatedRows = rows.map((row) =>
      row.id === params.id ? { ...row, won: !row.won } : row
    );
    setRows(updatedRows);
  };
  

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
    { field: 'bid', headerName: 'Bid Amount', width: 150 },
    { field: 'won', headerName: 'Won?', width: 150, renderCell: (params) => (
      <Checkbox
        checked={params.value}
        color="secondary"
        inputProps={{ 'aria-label': 'checkbox' }}
        onChange={() => handleCheckboxChange(params)}
      />
    ), },
  ];
 
  const nextRound = (value) => {
    console.log(round);
    setRound(round++);
    console.log(round);
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
          <Button color="primary" type="submit" variant="contained" sx={{ my: 4 }}>Next Round</Button>
        </form>
      </section>
      <section>
        <Typography color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', mt: 8 }}>
          Leaderboard
        </Typography>
      </section>
      <section>
        <Typography color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', mt: 8 }}>
          Total
        </Typography>
      </section>
    </ThemeProvider>
    </main>
    </>
  );
}

export default Game;