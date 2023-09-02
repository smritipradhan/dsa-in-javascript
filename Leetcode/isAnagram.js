//https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function (s, t) {
  const anag = new Map();

  for (let i = 0; i < s.length; i++) {
    if (anag.has(s[i])) {
      anag.set(s[i], anag.get(s[i]) + 1);
    } else {
      anag.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (anag.has(t[i])) {
      anag.set(t[i], anag.get(t[i]) - 1);
    } else {
      anag.set(t[i], 1);
    }
  }
  let flag = true;
  anag.forEach((value) => {
    if (value != 0) {
      console.log(value);
      flag = false;
    }
  });
  return flag;
};
