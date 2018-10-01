import React, { Component } from 'react';
import './App.css';
import { Icon, Slider } from "@blueprintjs/core";
import 'react-widgets/dist/css/react-widgets.css';
import Multiselect from 'react-widgets/lib/Multiselect'
// import { Button, Card, Elevation } from "@blueprintjs/core";
import Grid from '@material-ui/core/Grid';
import Screen from './Screen'

// Useful:
// https://jquense.github.io/react-widgets/api/Multiselect/
// https://blueprintjs.com/docs/#core
// https://dev.to/tylermcginnis/a-comprehensive-guide-to-reactjs-in-2018--4nbc

const SCREENS = [
  {device: 'iPhone 7', os: 'iOS', width: 750, height: 1334},
  {device: 'iPhone 7+', os: 'iOS', width: 1080, height: 1920},
  {device: 'Samsung Galaxy S6', os: 'Android', width: 1440, height: 2560}
]
const LANGUAGES = ['en', 'ua', 'ru', 'es', 'pl', 'fr']

let ScreenItem = ({ item }) => (
  <span>
    <strong>{item.device}</strong>
    {" " + item.width + "x" + item.height}
  </span>
);


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scale: 40,
      screens: [SCREENS[0], SCREENS[1]],
      languages: [LANGUAGES[0], LANGUAGES[1]],
      src: "http://example.com"
    };

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Icon icon="projects" iconSize={60} />
          <h1 className="App-title">Welcome to Cory</h1>
        </header>
        <br></br>
        <Grid container spacing={24}>
          <Grid item xs>
            <Slider
              min={0}
              max={100}
              labelStepSize={10}
              onChange={value => this.setState({ scale: value })}
              value={this.state.scale}
            />
          </Grid>
          <Grid item xs>
            <Multiselect
              data={SCREENS}
              textField='device'
              valueField='width'
              defaultValue={this.state.screens}
              groupBy='os'
              itemComponent={ScreenItem}
              onChange={value => this.setState({ screens: value })}
            />
          </Grid>
          <Grid item xs>
            <Multiselect
              data={LANGUAGES}
              defaultValue={this.state.languages}
              onChange={value => this.setState({ languages: value })}
            />
          </Grid>
        </Grid>

        <br/>
        {this.state.screens.map((screen) => {
          return (
            <Grid container spacing={24} key={screen.device}>
              {this.state.languages.map((language) => {
                let src = this.state.src.replace('/en/', '/'+language+'/')
                return (
                  <Grid item xs key={language}>    
                    <Screen item={screen} scale={this.state.scale} src={src} /> 
                  </Grid>
                )
              })}
            </Grid>
          )
        })}  
      </div>
    );
  }
}

export default App;
