// Longest Substring

const longestSubstring = (str, n) => {
  let i = 0;
  let left = 0;
  const s = new Set();
  let result = 0;
  while (i < n) {
    while (s.has(str[i])) {
      s.delete(str[left]);
      left++;
    }
    s.add(str[i]);
    result = Math.max(result, i - left + 1);
    i++;
  }
  console.log(result);
};

const str = "abcqwertyu";
const n = str.length;
longestSubstring(str, n);
