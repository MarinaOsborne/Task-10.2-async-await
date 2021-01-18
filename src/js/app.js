
// console.log('worked');

export const compareLetters = (a, b) => {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
};

export default function orderByProps(obj, arr) {
  const newObj = [];
  const newObj2 = [];

  for (const prop in obj) {
    for (let i = 0; i < arr.length; i += 1) {
      if (prop === arr[i]) {
        newObj.push({ key: prop, value: obj[prop] });
      }
    }
  }

  for (const prop in obj) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr.includes(prop, 0) === false) {
        newObj2.push({ key: prop, value: obj[prop] });
      }
      break;
    }
  }

  for (let i = 0; i < newObj2.length; i += 1) {
    newObj2.sort(compareLetters);
    newObj.push(newObj2[i]);
  }
  return newObj;
}
