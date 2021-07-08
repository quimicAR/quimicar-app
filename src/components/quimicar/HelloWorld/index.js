import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
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
        <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
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

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
