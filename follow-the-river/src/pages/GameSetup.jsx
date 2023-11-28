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

const GameSetup = () => {
  const { players, addPlayer, nameChange, removePlayer, setDealer } = usePlayersContext();

  const handleChange = (event) => {
    const firstDealerId = event.target.value;
    setDealer(firstDealerId);
  }
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
      <h1 className="hiddenH1" >Game Set Up</h1>
      <div id="subHead">
        <Typography variant="subtitle1" gutterBottom id="center">
          The companion app for Up & Down the River
        </Typography>
      </div>
    </header>
    <main>
      <ThemeProvider theme={theme}>
        <section>
          <Typography color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', mt: 8 }}>
            Players
          </Typography>
          <List>
            {players.map((player)=>(
              <ListItem key={ player.id } sx={{ justifyContent:'center' }}>
                <TextField id="standard-basic" label={player.playerName} variant="standard" onChange={(e) => nameChange(player.playerName, e.target.value)}/>
                <IconButton aria-label="delete" onClick={() => removePlayer(player.playerName)}>
                  <RemoveCircleIcon color='error' />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Button variant="outlined" color="success" onClick={() => addPlayer(`Player ${players.length + 1}`)} sx={{ marginLeft: "auto", marginRight: "auto" }}>Add Player</Button>
        </section>
        <section>
          <Typography color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', mt: 8 }}>
            Game
          </Typography>
          <FormControl sx={{ minWidth: 182, mt: 4 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Highest Card Count
            </InputLabel>
            <NativeSelect
              defaultValue={5}
              inputProps={{
                name: 'highest-card-count',
                id: 'uncontrolled-native',
              }}
            >
              <option value={3}>Three</option>
              <option value={5}>Five</option>
              <option value={10}>Ten</option>
            </NativeSelect>
        </FormControl>
        <FormControl sx={{ minWidth: 182, mt: 4 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              First Dealer
            </InputLabel>
            <NativeSelect
              onChange={handleChange}
              inputProps={{
                name: 'firstDealer',
                id: 'uncontrolled-native',
              }}
            >
              {players.map((player)=>(
                <option key={ player.id } value={ player.id }>
                  {player.playerName}
                </option>
              ))}
            </NativeSelect>
        </FormControl>
        </section>
        <Button href="/#/game" color="primary" variant="contained" sx={{ my: 4 }}>START GAME</Button>
      </ThemeProvider>
    </main>
    </>
  );
}

export default GameSetup;