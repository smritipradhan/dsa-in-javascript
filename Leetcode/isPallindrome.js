/**
 * @param {string} s
 * @return {boolean}
 */

const isAlpha = (ch) => {
  if (
    (ch >= "A" && ch <= "Z") ||
    (ch >= "a" && ch <= "z") ||
    (ch >= "0" && ch <= "9")
  ) {
    return true;
  }
  return false;
};

const remove = (sentence) => {
  let newSentence = "";

  for (let i = 0; i < sentence.length; i++) {
    if (isAlpha(sentence[i])) {
      newSentence = newSentence + sentence[i];
    }
  }

  return newSentence.toLowerCase();
};

var isPalindrome = function (s) {
  const newSentence = remove(s);

  let i = 0;
  let j = newSentence.length - 1;
  console.log(newSentence);
  if (newSentence === "") return true;
  while (i < j) {
    if (newSentence[i] !== newSentence[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};

var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  i = -1;
  j = s.length;
  while (++i < j--) {
    if (s[i] != s[j]) return false;
  }
  return true;
};
