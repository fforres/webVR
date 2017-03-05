import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Scene,
  Text,
  View,
  Image,
} from 'react-vr';
import Deal from './components/Deal';
import CubeDeal from './components/CubeDeal';
import Camera from './components/Camera';

class mkdir extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.radius = 8;
    this.state.dealsArr = [0,1,2,3,4,5,6,7,8];
  }
  render() {
    const degreesOfSeparation = (Math.PI*2)/this.state.dealsArr.length;
    return (
      <View>
        <Pano source={asset('mirrorsedge3.jpg')}/>
        <Camera />
        {this.state.dealsArr.map((el, i) => <Deal
          index={i+1}
          key={el}
          radius={this.state.radius}
          degreesOfSeparation={degreesOfSeparation}
          total={this.state.dealsArr.length}
        />)}
      </View>
    );
  }
};

AppRegistry.registerComponent('mkdir', () => mkdir);
