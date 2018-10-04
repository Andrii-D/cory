import React, { Component } from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import Multiselect from 'react-widgets/lib/Multiselect'
import { Navbar, Alignment, Slider, Button } from "@blueprintjs/core";
import Grid from '@material-ui/core/Grid';
import Screen from './Screen'
import { connect } from "react-redux";
import {setScale, setLanguages, setScreens, setUrl} from './actions'

// Useful:
// https://jquense.github.io/react-widgets/api/Multiselect/
// https://blueprintjs.com/docs/#core
// https://dev.to/tylermcginnis/a-comprehensive-guide-to-reactjs-in-2018--4nbc
// https://www.valentinog.com/blog/react-redux-tutorial-beginners/
// https://itnext.io/react-component-class-vs-stateless-component-e3797c7d23ab
export const SCREENS = [
  {device: 'iPhone 7', os: 'iOS', width: 750, height: 1334},
  {device: 'iPhone 7+', os: 'iOS', width: 1080, height: 1920},
  {device: 'Samsung Galaxy S6', os: 'Android', width: 1440, height: 2560},
  {device: 'Google Pixel', os: 'Android', width: 1800, height: 1920},
  {device: 'iPhone 4', os: 'iOS', width: 640, height: 960},
  {device: 'Nokia Lumia', os: 'Windows', width: 480, height: 800},
  {device: 'iPhone 3G', os: 'iOS', width: 320, height: 480},
].map(item => { return {ratio: (item.height/item.width).toFixed(2), ...item}});

export const LANGUAGES = ['en', 'ua', 'ru', 'es', 'pl', 'fr'];

let ScreenItem = ({ item }) => (
  <span>
    <strong>{item.device}</strong>
    {" " + item.width + "x" + item.height}
  </span>
);


class ConnectedApp extends Component {
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
                  onChange={value => this.props.setScale(value)}
                  value={this.props.scale}
                  labelRenderer={false}
                />
                <Navbar.Divider />
                <input className="bp3-input" type="text" 
                       placeholder="Text input" 
                       dir="auto" 
                       value={this.props.src} 
                       onChange={e => this.props.setUrl(e.target.value)} 
                />
                <Navbar.Divider />
                <Multiselect
                  data={SCREENS}
                  textField='device'
                  valueField='width'
                  defaultValue={this.props.screens}
                  groupBy='ratio'
                  itemComponent={ScreenItem}
                  onChange={value => this.props.setScreens(value)}
                />
                <Navbar.Divider />
                <Multiselect
                  data={LANGUAGES}
                  defaultValue={this.props.languages}
                  onChange={value => this.props.setLanguages(value)}
                />
                <Navbar.Divider />
                  <Button icon="heart-broken" minimal={true} onClick={() => window.location.reload()}/>
            </Navbar.Group>
        </Navbar>

        <br/>
        {this.props.screens.map((screen) => {
          return (
            <Grid container spacing={24} key={screen.device}>
              {this.props.languages.map((language) => {
                let src = this.props.src.replace('/en/', '/'+language+'/')
                return (
                  <Grid item xs key={language}>    
                    <Screen item={screen} scale={this.props.scale} src={src} /> 
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

const mapStateToProps = state => {
  return { 
    languages: state.languages, 
    screens: state.screens, 
    src: state.src, 
    scale: state.scale 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setScale: scale => dispatch(setScale(scale)),
    setUrl: url => dispatch(setUrl(url)),
    setLanguages: languages => dispatch(setLanguages(languages)),
    setScreens: screens => dispatch(setScreens(screens)),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;
