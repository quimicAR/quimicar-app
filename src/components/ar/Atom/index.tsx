/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroAmbientLight,
  ViroNode,
  ViroText,
  ViroFlexView,
} from '@viro-community/react-viro';
import AtomRing from './AtomRing';
import AtomNucleus from './AtomNucleus';
import {INeutron, IProton, IRing} from '../../../interfaces';

interface IAtom {
  protons: IProton[];
  neutrons?: INeutron[];
  rings?: IRing[];
  text: {
    name: string;
    atomicNum: string;
    atomicMass: string;
  };
}

const Atom = ({protons, neutrons, rings, text}: IAtom): JSX.Element => {
  return (
    <ViroNode>
      <ViroNode>
        <ViroAmbientLight color="#ffffff" />
        <AtomNucleus protons={protons} neutrons={neutrons} />
        {rings?.map((ring: IRing) => (
          <AtomRing
            key={ring.id}
            scale={[0.04, 0.04, 0.04]}
            eletrons={ring.eletrons}
            animation={ring.animation}
          />
        ))}
      </ViroNode>
      {/* Create component to handle w/ Atom Text
        OBS: Think about what information are relevant and nonrepetitive
      */}
      <ViroNode
        animation={{
          name: 'animateViro',
          run: true,
        }}
        position={[0.05, 0, 0]}>
        <ViroFlexView
          rotation={[0, 0, 0]}
          height={0.03}
          width={0.05}
          style={styles.card}>
          <ViroFlexView style={styles.cardWrapper}>
            <ViroText
              width={0.1}
              height={0.1}
              text={text.name}
              scale={[0.1, 0.1, 0]}
              position={[0.1, 0.1, 0]}
              rotation={[-90, 0, 0]}
              style={styles.textStyle}
            />
            <ViroText
              width={0.1}
              height={0.1}
              text={text.atomicMass}
              scale={[0.05, 0.05, 0]}
              position={[0.05, -0.05, 0]}
              rotation={[-90, 0, 0]}
              style={styles.subText}
            />
            <ViroText
              width={0.1}
              height={0.1}
              text={text.atomicNum}
              scale={[0.05, 0.05, 0]}
              position={[0.01, -0.01, 0]}
              rotation={[-90, 0, 0]}
              style={styles.subText}
            />
          </ViroFlexView>
        </ViroFlexView>
      </ViroNode>
    </ViroNode>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: 0.5,
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.5,
  },
});

export default Atom;
