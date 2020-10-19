import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import {theme as muiTheme} from './styles'
import Welcome from "./screens/Welcome";
import Clue1 from "./screens/Clue1";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {MuiThemeProvider} from "@material-ui/core";
import Clue2 from "./screens/Clue2";
import Clue3 from "./screens/Clue3";
import Clue4 from "./screens/Clue4";
import Video from "./screens/Video";
import Clue5 from "./screens/Clue5";
import End from "./screens/End";
import Clue6 from "./screens/Clue6";

const theme = createMuiTheme(muiTheme);

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/clue1' component={Clue1} />
            <Route exact path='/clue2' component={Clue2} />
            <Route exact path='/clue3' component={Clue3} />
            <Route exact path='/clue4' component={Clue4} />
            <Route exact path='/clue5' component={Clue5} />
            <Route exact path='/clue6' component={Clue6} />
            <Route exact path='/end' component={End} />
            <Route exact path='/welcomeVideo'>
                <Video url="https://youtu.be/-e6XibckX3E" title="LETS GO!" nextPath="/clue1">
                    <p>Mi Amor, here is a little message from us, because we support you in all your quests in life!</p>
                </Video>
            </Route>
            <Route exact path='/video1'>
                <Video url="https://youtu.be/fxkPTOVmGyA" title="WELL DONE!!!" nextPath="/clue2">
                    <p>There is someone, that wants to tell you something :)</p>
                </Video>
            </Route>
            <Route exact path='/video2'>
                <Video url="https://youtu.be/vC74vNTXmF4" title="AWESOME!!!" nextPath="/clue3">
                    <p>Good Job mi amor! Here is some motivation for you :)</p>
                </Video>
            </Route>
            <Route exact path='/video3'>
                <Video url="https://youtu.be/ibc2TGseHKI" title="YOU ROCK!!!" nextPath="/clue4">
                    <p>You are amazing! Almost done, but here is someone else thinking about you :)</p>
                </Video>
            </Route>
            <Route exact path='/video4'>
                <Video url="https://youtu.be/YlrmgdhdJDU" title="YOU ARE THE BEST!!!" nextPath="/clue5">
                    <p>Its good to have so many friends, joining you in your quest :)</p>
                </Video>
            </Route>
            <Route exact path='/video5'>
                <Video url="https://youtu.be/vtul_uidmRw" title="ONE MORE CLUE!!!" nextPath="/clue6">
                    <p>Congrats Baby!!! Go ahead!! You can do it!!</p>
                </Video>
            </Route>
          </Switch>
      </MuiThemeProvider>
  );
}

export default App;
