import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroAmbientLight,
  ViroNode,
  ViroText,
  ViroFlexView,
} from '@viro-community/react-viro';
import AtomRing from './AtomRing';
import AtomNucleus from './AtomNucleus';
import {IElement, INeutron, IProton, IRing} from '../../../interfaces';
interface AtomARProps {
  protons: IProton[];
  neutrons: INeutron[];
  rings: IRing[];
  atom: IElement;
}

const AtomAR = ({atom, neutrons, protons, rings}: AtomARProps): JSX.Element => {
  const {shells} = atom;
  const [numOfEletrons, setNumOfEletrons] = useState(0);

  const calculateEletrons = () => {
    const total = shells.reduce((a, b) => a + b);
    setNumOfEletrons(total);
  };

  useEffect(() => {
    calculateEletrons();
  }, []);

  return (
    <>
      <ViroNode
        dragType="FixedToPlane"
        dragPlane={{
          planePoint: [0, -1, 0],
          planeNormal: [0, 1, 0],
          maxDistance: 5,
        }}>
        <ViroNode>
          <ViroAmbientLight color="#ffffff" />
          <AtomNucleus protons={protons} neutrons={neutrons} />
          {rings?.map(
            ({id, scale, numberOfEletrons, animation, rotation}: IRing) => (
              <AtomRing
                key={id}
                scale={scale}
                numberOfEletrons={numberOfEletrons}
                animation={animation}
                rotation={rotation}
              />
            ),
          )}
        </ViroNode>
        {/* Create component to handle w/ Atom Text
        OBS: Think about what information are relevant and nonrepetitive */}
      </ViroNode>
      <ViroNode position={[-0.01, 0.01, 0.05]}>
        <ViroFlexView rotation={[-90, 0, 0]} style={styles.card}>
          <ViroText
            text={`E=${numOfEletrons}`}
            color="rgb(232,80,62)"
            scale={[0.09, 0.09, 0]}
            style={styles.text}
          />
          <ViroText
            text={`P=${protons.length}`}
            color="rgb(20,115,230)"
            scale={[0.09, 0.09, 0]}
            style={styles.text}
          />
          <ViroText
            text={`N=${neutrons.length}`}
            color="rgb(252,194,22)"
            scale={[0.09, 0.09, 0]}
            style={styles.text}
          />
        </ViroFlexView>
      </ViroNode>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '500',
    marginHorizontal: 15,
  },
  card: {
    flexDirection: 'row',
  },
});

export default AtomAR;
