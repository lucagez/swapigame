/**
 * Defininf props that will be used to
 * describe a human or a starship.
 */

const props = {
  human: {
    info: [
      'gender',
      'height',
      'birthYear',
      'height',
    ],
    fight: 'mass',
  },

  starship: {
    info: [
      'class',
      'consumables',
      'passengers',
      'cargoCapacity',
    ],
    fight: 'crew',
  },
};

export default props;
