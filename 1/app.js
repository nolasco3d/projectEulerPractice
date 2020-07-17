let allMult = [];
const range = 1000;
const multOf = [3, 5];

const clearDuplicates = arr => {
  const uniq = new Set(arr);
  allMult = [...uniq];
};
const sumArr = arr => console.log(arr.reduce((a, b) => a + b, 0));
const isMultOf = (n, m) => n >= m && n % m === 0;
const resolveChallenge = () => {
  multOf.forEach(mult => {
    for (let i = 0; i < range; i++) {
      if (isMultOf(i, mult)) allMult.push(i);
    }
  });
  clearDuplicates(allMult);
  sumArr(allMult);
};
resolveChallenge();
