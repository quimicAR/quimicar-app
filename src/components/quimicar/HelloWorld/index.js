import React, {Component} from 'react';
import {
  ViroARScene,
  ViroSphere,
  ViroAmbientLight,
  ViroARSceneNavigator,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroMaterials,
  Viro3DObject,
  ViroAnimations,
} from '@viro-community/react-viro';

const HelloScene = () => {
  return (
    <ViroARScene>
      <ViroARImageMarker target={'hydrogen'}>
        <ViroAmbientLight color="#ffffff" />
        <ViroSphere
          position={[0, 0, 0]}
          scale={[0.02, 0.02, 0.02]}
          opacity={0.2}
          materials={['atom']}
          dragType="FixedToWorld"
        />
        <ViroSphere
          position={[0, 0, 0]}
          scale={[0.004, 0.004, 0.004]}
          materials={['proton']}
          dragType="FixedToWorld"
        />
        <ViroSphere
          position={[0, 0, 0.1]}
          scale={[0.003, 0.003, 0.003]}
          materials={['electron']}
          dragType="FixedToWorld"
        />
        <Viro3DObject
          source={require('./res/torus.obj')}
          resources={[require('./res/torus.mtl')]}
          position={[0, 0, 0.1]}
          scale={[0.04, 0.04, 0.04]}
          rotation={[180, 0, 0]}
          dragType="FixedToWorld"
          type="OBJ"
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

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

ViroAnimations.registerAnimations({
  loopRotate: {properties: {rotateX: '+=45'}, duration: 1000},
});

ViroMaterials.createMaterials({
  atom: {
    lightingModel: 'Lambert',
    diffuseColor: 'rgb(0,0,0)',
  },
  proton: {
    diffuseColor: 'rgb(20,115,230)',
  },
  neutron: {
    diffuseColor: 'rgb(252,194,22)',
  },
  electron: {
    diffuseColor: 'rgb(232,80,62)',
  },
});

ViroARTrackingTargets.createTargets({
  hydrogen: {
    source: require('./res/hydrogen.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
});
