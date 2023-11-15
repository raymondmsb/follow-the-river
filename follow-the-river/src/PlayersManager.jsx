import React from "react";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TextField from '@mui/material/TextField';
import { ListItem, Button } from '@mui/material';
import List from '@mui/material/List';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';



const PlayersManager = () => {
  const [players, setPlayers] = useState([
    {
      playerName: "Player 1"
    }
  ]);

  const addPlayer = (newPlayerName) => {
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        playerName: newPlayerName
      }
    ]);
  };
  
  const removePlayer = (removePlayerName) => {
    setPlayers(players.filter(function(player) { return player.playerName != removePlayerName; }))
  }

  const nameChange = (oldName, newName) => {
    setPlayers(players.map((player) => (player.playerName == oldName ? { ...player, playerName: newName } : player)));
  }

  return (
    <>
    <List>
      {players.map((player, index)=>(
        <ListItem key={ index } sx={{ justifyContent:'center' }}>
          <TextField id="standard-basic" label={player.playerName} variant="standard" onChange={(e) => nameChange(player.playerName, e.target.value)}/>
          <IconButton aria-label="delete" onClick={() => removePlayer(player.playerName)}>
            <RemoveCircleIcon color='error' />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Button variant="outlined" color="success" onClick={() => addPlayer(`Player ${players.length + 1}`)} sx={{ marginLeft: "auto", marginRight: "auto" }}>Add Player</Button>
    </>
  )
}

export default PlayersManager;