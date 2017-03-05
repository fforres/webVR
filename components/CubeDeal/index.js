import React from 'react';
import {
  asset,
  View,
  Mesh,
  PointLight,
} from 'react-vr';

class CubeMesh extends React.Component {
  constructor(){
    super();
    this.state = {};
    this.state.rotation = 0;
  }
  render() {
    return (
      <View {...this.props}>
        <Mesh
          style={{
            transform: [
              {translate: [0, -15, -70]},
              {scale : 0.1 },
              {rotateY : this.state.rotation},
              {rotateX : -90}
            ],
          }}
          source={{
            uri:'cube',
            texture:asset('FFORRES.jpeg'),
            lit: true,
          }}
        />
        <PointLight style={{color:'white', transform:[{translate : [0, 400, 700]}]}} />
      </View>);
  }
}

export default CubeMesh
