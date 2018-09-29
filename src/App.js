import React, { Component } from 'react';
import './App.css';
import { Icon, Slider } from "@blueprintjs/core";
import 'react-widgets/dist/css/react-widgets.css';
import Multiselect from 'react-widgets/lib/Multiselect'

let SCREENS = [
  {device: 'iPhone 7', os: 'iOS', width: "750", height: "1334"},
  {device: 'iPhone 7+', os: 'iOS', width: "1080", height: "1920"},
  {device: 'Samsung Galaxy S6', os: 'Android', width: "1440", height: "2560"}
]

let LANGUAGES = ['en', 'ua']

let ScreenItem = ({ item }) => (
  <span>
    <strong>{item.device}</strong>
    {" " + item.width + "x" + item.height}
  </span>
);

class Screen extends Component {
  
  render() {
    return (
      <div className="Screen">
        <iframe sandbox="allow-same-origin allow-forms allow-scripts" 
                seamless="" 
                width={this.props.width}
                height={this.props.height}
                src={this.props.src}
        >
        </iframe>
      </div>
    );
  }
}
Screen.defaultProps = {
  src: "http://example.com",
  width: 255, 
  height: 320 
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 25,
      screens: [SCREENS[0]],
      languages: [LANGUAGES[0]],
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
        <Slider
          min={0}
          max={100}
          labelStepSize={10}
          onChange={value => this.setState({ scale: value })}
          value={this.state.scale}
        />

        <Multiselect
          data={SCREENS}
          textField='device'
          valueField='width'
          defaultValue={this.state.screens}
          groupBy='os'
          itemComponent={ScreenItem}
          onChange={value => this.setState({ screens: value })}
        />
        <Multiselect
          data={LANGUAGES}
          defaultValue={this.state.languages}
          onChange={value => this.setState({ languages: value })}
        />

        {
          this.state.screens.map((screen) => 
            <Screen width={screen.width*(this.state.scale/100)} 
                    height={screen.height*(this.state.scale/100)} 
                    />)
        }
        
        
      </div>
    );
  }
}

export default App;
