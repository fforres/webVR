import React from 'react';
import {
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';


const transformAngleToXYPosition = (angle, radius) => {
  const OpCatetus = Math.round(Math.sin(angle) * radius);
  const AdjCatetus = Math.round(Math.cos(angle) * radius);
  return {
    newXPosition: OpCatetus,
    newZPosition: AdjCatetus,
  }

}
class Deal extends React.Component {
  render() {
    const {
      index,
      radius,
      degreesOfSeparation,
    } = this.props;
    const angle = degreesOfSeparation * index;
    const { newXPosition, newZPosition } = transformAngleToXYPosition(angle, radius);
    console.log(index, newXPosition, newZPosition)
    return (
      <View
        style={{
          height: 1,
          transform: [{
            translate: [newXPosition, 0, newZPosition],
          }, {
            rotateY: 20,
          }],
        }}
      >
        <Image
          onEnter={() => this.setState({
            gazeEnabled:true
          })}
          onInput={(e) => console.log(e.nativeEvent)}
          pointerEvents='box-only'
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={{
            width: 2,
            height: 1,
          }}
        />
      </View>
    );
  }
};

export default Deal;
