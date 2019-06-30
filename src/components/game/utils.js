// The SWAPI response use by default the null value if a
// field has no value.
// PropTypes does not works with null props.
// => converting null to undefined to use Proptypes default props
const nullToUndefined = obj => Object
  .keys(obj)
  .reduce((a, b) => ({ ...a, [b]: obj[b] || undefined }), {});

const randInt = n => Math.floor(Math.random() * n);

const selectRandSubset = n => arr => Array(n).fill(0).map(() => arr[randInt(arr.length)]);

const selectHighestProp = prop => (arr) => {
  let max = 0;
  let obj;

  arr
    .forEach((e) => {
      if (e[prop] > max) {
        max = e[prop];
        obj = e;
      }
    });

  return obj;
};

const selectSix = selectRandSubset(6);

const selectStrongest = {
  human: selectHighestProp('mass'),
  starship: selectHighestProp('crew'),
};

export {
  nullToUndefined,
  randInt,
  selectRandSubset,
  selectHighestProp,
  selectSix,
  selectStrongest,
};
