import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset,
} from 'react-360';
import Main from './components/Main'

export default class Hello360 extends React.Component {
  constructor() {
    super();

    this.state = {
      focused: null,
    }
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleEnvironmentChange = this.handleEnvironmentChange.bind(this);
  }

  handleFocusChange(focused){
    this.setState({
      focused,
    });
  };

  handleEnvironmentChange(assetName) {
    Environment.setBackgroundImage(asset(assetName), {
      format: '2D',
    });
  }

  render() {

    return (
      <Main />
    );
  }
};

// const styles = StyleSheet.create({
//   panel: {
//     // Fill the entire surface
//     height: 600,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   greetingBox: {
//     padding: 20,
//     backgroundColor: '#000000',
//     borderColor: '#639dda',
//     borderWidth: 2,
//   },
//   greetingBoxFocused: {
//     padding: 50,
//     backgroundColor: '#000000',
//     borderColor: '#639dda',
//     borderWidth: 4,
//   },
//   greeting: {
//     fontSize: 30,
//   },
// });

AppRegistry.registerComponent('Main', () => Main);
AppRegistry.registerComponent('Hello360', () => Hello360);
