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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import { Link as navLink } from 'react-router-dom';
import Button from '@mui/material/Button';

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

const HowToPlay = () => {
  return (
    <>
    <Helmet>
      <title>Home - Follow the River</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <header>
      <IconButton aria-label="go back" sx={{color: '#FF9900', position: 'absolute', transform:'translateY(50%) translateX(50%)',}} component={navLink} to="/">
        <ArrowBackIosIcon />
      </IconButton>
      <img id="header" src={ logo } alt="Follow the River App"/>
      <h1 class="hiddenH1" >Follow the River App</h1>
      <div id="subHead">
        <Typography variant="subtitle1" gutterBottom id="center">
          The companion app for Up & Down the River
        </Typography>
      </div>
    </header>
    <main>
      <List id="menu">
        <ListItem sx={{ justifyContent: "center" }}>
          <Link underline="hover" href="#rules">
            <ScrollLink
              style={{ color: "#3f51bf" }}
              underline="hover"
              to="howToPlay"
              spy={true}
              smooth={true}
              duration={500}
            >
              How to Play
            </ScrollLink>
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link underline="hover">
            <ScrollLink
              style={{ color: "#3f51bf" }}
              underline="hover"
              to="rules"
              spy={true}
              smooth={true}
              duration={500}
            >
              Rules
            </ScrollLink>
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link underline="hover">
            <ScrollLink
              style={{ color: "#3f51bf" }}
              underline="hover"
              to="scoring"
              spy={true}
              smooth={true}
              duration={500}
            >
              Scoring and Points
            </ScrollLink>
          </Link>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <Link underline="hover">
            <ScrollLink
              style={{ color: "#3f51bf" }}
              underline="hover"
              to="tips"
              spy={true}
              smooth={true}
              duration={500}
            >
              Strategy and Tips
            </ScrollLink>
          </Link>
        </ListItem>
      </List>
      <ThemeProvider theme={theme}>
      <div style={{ maxWidth: 310 }}>
      <Typography id="howToPlay" color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', my: 3 }}>
        How to Play
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
        All you need to play the Up the River, Down the River card game is the standard 52-card Anglo-American deck, with no Jokers included.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ alignSelf: 'flex-start', mt: 3 }}>
        Cards
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
        In the Up the River, Down the River card game, cards are ranked with Aces being the highest and 2s being the lowest.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ alignSelf: 'flex-start', mt: 3 }}>
        Dealing
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      The dealer is determined at random, though deck splitting can be used if an unbiased choice is requested. Each player is dealt a certain number of cards based on the current round.
      You will choose the highest number of cards option, and the first dealer option when setting up your game. If your highest number of cards option is 5, you will start dealing with 1 card in the first round, 2 cards in the second round, etc. until you reach 5 cards in round 5. Then you will deal 4 cards in round 6, 3 cards in round 7, and so one until you finish after round 9.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      After the cards are dealt to each player, the remaining cards are set aside, and the top card is revealed to determine the trump suit for the round.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ alignSelf: 'flex-start', mt: 3 }}>
        Bids
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      Beginning with the player to the left of the dealer, each player is required to make an estimate or prediction of how many tricks they can win before the round begins. Each player, in clockwise order, is required to make these predictions.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      The only limitations to each player’s predictions are that they cannot exceed the number of cards dealt to hand (though it makes no sense to overestimate).
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      Record the bids in the app by clicking the plus and minus icons.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      If you win your bid, you will receive the point corresponding to your bid, plus 10 points. If you do not win your bid, you will receive no points. 
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      At the end of each round, before pressing the next round button, use the checkboxes to mark whether or not each player won their bid. Checked meaning they did win, unchecked meaning they did not.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ alignSelf: 'flex-start', mt: 3 }}>
        Trick Taking
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      After bidding, the trick-taking process begins. The player to the left of the dealer will lead the first trick, and turn order proceeds in clockwise order.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      Each player will play out a single card until all players have played one card each. Note that players must follow suit if they have a card of the leading suit.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      If no cards from the trump suit are played, the highest-ranked card that matches the leading suit will win the trick.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      If cards from the trump suit are played, the highest-ranked card from the trump suit wins the trick.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      The player who wins the current trick will take all the cards used in the trick and place them by their side. This player will lead the next trick.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      After all tricks are completed, the tricks taken by each player are counted, and compared with the bid made earlier. The players will tell the person using the app whether they won or not, and their boxes will be checked accordingly.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ alignSelf: 'flex-start', mt: 3 }}>
        How to Win
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      After all the rounds are finished, the next round button will say "Finish Game" and the winner will be the person with the most points.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      If the group agrees to finish early the Leaderboard section will display the current standings.
      </Typography>
      <Typography id="rules" color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', my: 3 }}>
        Rules
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ alignSelf: 'flex-start', mt: 3 }}>
        The Up and Down the River rules are:
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      1. The first dealer is determined
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      2. Each player is dealt a number of cards based on the current round requirements, the remaining cards are set aside and the top card is revealed, determining the trump suit.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      3. Each player makes a bid on how many tricks they can win for the round, beginning with the player to the left of the dealer and rotating in clockwise order. The bids are recorded in the game table.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      4. The trick-taking process then begins, with the player to the left of the dealer leading the first trick, with the turn order rotating in clockwise order.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      5. The player winning the trick leads the next trick.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      6. Once all tricks per round are played, the tricks are counted and compared with the initial bids. Check the boxes under the "won" column for each player who won their bid.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      7. The next round proceeds until all rounds are played.
      </Typography>
      <Typography id="scoring" color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', my: 3 }}>
        Scoring and Points
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      Up and Down the River scoring is done based on the bidding process and the number of tricks won in each round.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      If a player satisfies their initial bid exactly, they are awarded 10 points plus the number of their bid.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      The initial bids must be met to receive points. This means a player who bids 7 but takes 8 tricks will not win any points.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      If a player bids 0 and takes 0 tricks, they still get 10 points for “losing” the round.
      </Typography>
      <Typography id="tips" color="primary" variant="h2" sx={{ width: '100%', textAlign: 'center', my: 3 }}>
        Strategy and Tips
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      In Up and Down the River card game strategy, the most important part is the bidding process.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      Don’t be afraid to bid 0, even on rounds with many cards per player. This changes the game style, where you are deliberately trying to lose.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      Count cards on high-card count rounds. While there are still unveiled cards, you can get a feel for other players’ hands.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      Remember that you can deliberately force a player to take a trick if they are at their bid amount.
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ maxWidth: 310 }}>
      Don't worry too much about taking as many tricks as possible. Guessing your bid accurately is what's important.
      </Typography>
      </div>
      <ScrollLink
        style={{ color: "#3f51bf" }}
        underline="hover"
        to="menu"
        spy={true}
        smooth={true}
        duration={500}
      >
        <Button sx={{ my: 5 }} variant="contained">Back to Top</Button>
      </ScrollLink>
    </ThemeProvider>
    </main>
    </>
  );
}

export default HowToPlay;