import React, { Component } from 'react';
import './App.css';
import 'react-widgets/dist/css/react-widgets.css';
import Multiselect from 'react-widgets/lib/Multiselect'
import { Navbar, Alignment, Slider, Button } from "@blueprintjs/core";
import Grid from '@material-ui/core/Grid';
import Screen from './Screen'

// Useful:
// https://jquense.github.io/react-widgets/api/Multiselect/
// https://blueprintjs.com/docs/#core
// https://dev.to/tylermcginnis/a-comprehensive-guide-to-reactjs-in-2018--4nbc

const SCREENS = [
  {device: 'iPhone 7', os: 'iOS', width: 750, height: 1334},
  {device: 'iPhone 7+', os: 'iOS', width: 1080, height: 1920},
  {device: 'Samsung Galaxy S6', os: 'Android', width: 1440, height: 2560},
  {device: 'Google Pixel', os: 'Android', width: 1800, height: 1920},
  {device: 'iPhone 4', os: 'iOS', width: 640, height: 960},
  {device: 'Nokia Lumia', os: 'Windows', width: 480, height: 800},
  {device: 'iPhone 3G', os: 'iOS', width: 320, height: 480},
].map(item => { return {ratio: (item.height/item.width).toFixed(2), ...item}})

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
      scale: 50,
      screens: [SCREENS[0], SCREENS[1]],
      languages: [LANGUAGES[0], LANGUAGES[1]],
      // src: "https://www.pexels.com"
      src: "http://www.bbc.com"
    };

    this.refreshScreen = this.refreshScreen.bind(this)

  }
  resetState() {
    window.location.reload();
  }
  refreshScreen(e) {
    this.setState({
      src: e.target.value
    })
  }
  render() {
    return (
      <div className="App">

        <Navbar fixedToTop={true}>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>CORY</Navbar.Heading>
                <Navbar.Divider />
                <Slider
                  min={0}
                  max={100}
                  labelStepSize={25}
                  onChange={value => this.setState({ scale: value })}
                  value={this.state.scale}
                  labelRenderer={false}
                />
                <Navbar.Divider />
                <input className="bp3-input" type="text" placeholder="Text input" dir="auto" value={this.state.src} onChange={this.refreshScreen} />
                <Navbar.Divider />
                <Multiselect
                  data={SCREENS}
                  textField='device'
                  valueField='width'
                  defaultValue={this.state.screens}
                  groupBy='ratio'
                  itemComponent={ScreenItem}
                  onChange={value => this.setState({ screens: value })}
                />
                <Navbar.Divider />
                <Multiselect
                  data={LANGUAGES}
                  defaultValue={this.state.languages}
                  onChange={value => this.setState({ languages: value })}
                />
                <Navbar.Divider />
                  <Button icon="heart-broken" minimal={true} onClick={this.resetState}/>
            </Navbar.Group>
        </Navbar>

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
