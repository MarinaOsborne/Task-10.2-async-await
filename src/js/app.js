
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
    if (prop === arr[0] || prop === arr[1]) {
      const firstobj = { key: prop, value: obj[prop] };
      newObj.push(firstobj);
    } else {
      const secondobj = { key: prop, value: obj[prop] };
      newObj2.push(secondobj);
    }
  }

  for (let i = 0; i < newObj2.length; i += 1) {
    newObj2.sort(compareLetters);
    newObj.push(newObj2[i]);
  }
  return newObj;
}
