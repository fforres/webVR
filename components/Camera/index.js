import React from 'react';
import {
  Scene,
  Text,
} from 'react-vr';

class CubeMesh extends React.Component {
  constructor(){
    super();
    this.state = {};
    this.keyPresses = this.keyPresses.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      console.log(e)
    },false);
  }
  keyPresses() {

  }
  render() {
    return (
      <Text />
        // <Scene />
    );
  }
}

export default CubeMesh
