// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/description/

function compareMaps(map1, map2) {
  if (map1.length != map2.length) return false;

  for (let [key, val] of map1) {
    testVal = map2.get(key);
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }4

  return true;
}

const checkStringsMadeEqual = (s1, s2) => {
  const evenS1 = new Map();
  const evenS2 = new Map();

  const oddS1 = new Map();
  const oddS2 = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (i % 2 === 0) {
      evenS1.set(s1[i], (evenS1.get(s1[i]) ?? 0) + 1);
      evenS2.set(s2[i], (evenS2.get(s2[i]) ?? 0) + 1);
    } else {
      oddS1.set(s1[i], (oddS1.get(s1[i]) ?? 0) + 1);
      oddS2.set(s2[i], (oddS2.get(s2[i]) ?? 0) + 1);
    }
  }
  return compareMaps(evenS1, evenS2) && compareMaps(oddS1, oddS2);
};

const str1 = "abcdba";
const str2 = "cabdab";
console.log(checkStringsMadeEqual(str1, str2));
