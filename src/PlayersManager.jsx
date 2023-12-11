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
import { v4 as randomID } from 'uuid';
import { createContext, useContext } from 'react';

const PlayersContext = createContext();

export const usePlayersContext = () => {
  const context = useContext(PlayersContext);
  if (!context) {
    throw new Error('usePlayersContext must be used within a PlayersProvider');
  }
  return context;
};

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([
    {
      id: 364831,
      playerName: 'Player 1',
      dealer: true,
      score: 0,
    },
  ]);

  const setDealer = (selectedPlayerId) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        dealer: player.id === selectedPlayerId,
      }))
    );
  };

  const undoDealer = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => ({
        ...player,
        dealer: false,
      }))
    );
    console.log("All players' dealer set to false");
  };
  
  

  const addPlayer = (newPlayerName) => {
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        id: randomID(),
        playerName: newPlayerName, 
        dealer: false,
        score: 0,
      }
    ]);
  };
  
  const removePlayer = (removePlayerName) => {
    setPlayers(players.filter(function(player) { return player.playerName !== removePlayerName; }))
  }

  const nameChange = (oldName, newName) => {
    setPlayers(players.map((player) => (player.playerName == oldName ? { ...player, playerName: newName } : player)));
  }

  const updatePlayers = (newPlayers) => {
    setPlayers((prevPlayers) => {
      // Perform any additional operations or validations if needed
      return newPlayers;
    });
  };
  


  return (
    <PlayersContext.Provider value={{ players, addPlayer, removePlayer, nameChange, setDealer, undoDealer, updatePlayers }}>
      {children}
    </PlayersContext.Provider>
  )
}
