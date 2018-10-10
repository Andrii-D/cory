import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import Multiselect from 'react-widgets/lib/Multiselect';
import {Navbar, Alignment, Slider, Button} from '@blueprintjs/core';
import Grid from '@material-ui/core/Grid';
import Screen from './Screen';
import {connect} from 'react-redux';
import {
  resetState,
  abstractSetter,
  LANGUAGES,
  SCREENS
} from './reducers';
import PropTypes from 'prop-types';

// Useful:
// https://jquense.github.io/react-widgets/api/Multiselect/
// https://blueprintjs.com/docs/#core
// https://dev.to/tylermcginnis/a-comprehensive-guide-to-reactjs-in-2018--4nbc
// https://www.valentinog.com/blog/react-redux-tutorial-beginners/
// https://itnext.io/react-component-class-vs-stateless-component-e3797c7d23ab

let ScreenItem = ({item}) => (
  <span>
    <strong>{item.device}</strong>  {item.width}x{item.height}
  </span>
);

const ConnectedApp = ({
  scale,
  src,
  languages,
  screens,
  resetState,
  abstractSetter,
}) => {
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
            onChange={value => abstractSetter({value: value, type: 'scale'})}
            value={scale}
            labelRenderer={false}
          />
          <Navbar.Divider />
          <input
            className="bp3-input"
            type="text"
            placeholder="Text input"
            dir="auto"
            value={src}
            onChange={e => abstractSetter({value: e.target.value, type: 'src'})}
          />
          <Navbar.Divider />
          <Multiselect
            data={SCREENS}
            textField="device"
            valueField="width"
            defaultValue={screens}
            groupBy="ratio"
            itemComponent={ScreenItem}
            onChange={value => abstractSetter({value: value, type: 'screens'})}
          />
          <Navbar.Divider />
          <Multiselect
            data={LANGUAGES}
            defaultValue={languages}
            onChange={value => abstractSetter({value: value, type: 'languages'})}
          />
          <Navbar.Divider />
          <Button
            icon="heart-broken"
            minimal={true}
            onClick={() => resetState()}
          />
        </Navbar.Group>
      </Navbar>

      <br />
      {screens.map (screen => {
        return (
          <Grid container spacing={24} key={screen.device}>
            {languages.map (language => {
              return (
                <Grid item xs key={language}>
                  <Screen
                    item={screen}
                    scale={scale}
                    src={src.replace('/en/', '/' + language + '/')}
                  />
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </div>
  );
};

ConnectedApp.propTypes = {
  scale: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  screens: PropTypes.array.isRequired,
  abstractSetter: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    languages: state.languages,
    screens: state.screens,
    src: state.src,
    scale: state.scale,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetState: () => dispatch(resetState()),
    abstractSetter: (data) => dispatch(abstractSetter(data)),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps) (ConnectedApp);
export default App;
