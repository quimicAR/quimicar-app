import React, {Component} from 'react';
// import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroSphere,
  ViroText,
  ViroARSceneNavigator,
  ViroConstants,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroMaterials
} from '@viro-community/react-viro';


class HelloScene extends Component {
  constructor(props) {
    super(props);
    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    };
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  _onInitialized(state, reason) {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Hello World!',
      });
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
 
  
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroARImageMarker target={"targetOne"} >
          <ViroSphere position={[0,0,0]} scale={[.05, .05, .05]} opacity={0.3} />
          <ViroText
              text="AR é meu saco"
              color="#ff0000"
              width={2} height={2}
              position={[.02,.03,0]}
          />
        </ViroARImageMarker>  
      </ViroARScene>
    );
  }
}

export default class HelloWorldSceneAR extends Component {
  render() {
    return (
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloScene,
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
      />
    );
  }
}

ViroMaterials.createMaterials({
  atom: {
     lightingModel: "Lambert",
   },
});

ViroARTrackingTargets.createTargets({
  "targetOne" : {
    source : require('./res/hiro.png'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
});

