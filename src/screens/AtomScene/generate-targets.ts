const generateTargets = () => {
  let size = Array.from(Array(119).keys());
  size = size.map(size => size + 1);

  const generate = (number: number) => ({
    [number]: {
      source: `./res/${number}.png`,
      orientation: 'Up',
      physicalWidth: 0.1,
    },
  });

  const targets = size.map(atomicNumber => generate(atomicNumber));

  console.log(targets);

  return targets;
};

export default generateTargets;
