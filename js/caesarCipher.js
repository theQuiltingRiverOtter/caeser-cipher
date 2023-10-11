const caesarCipher = function (string, shift_factor) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";
  let newIndex;
  for (let ltr of string) {
    let lowercaseIndex = lowercase.indexOf(ltr);
    let uppercaseIndex = uppercase.indexOf(ltr);
    if (lowercaseIndex == -1 && uppercaseIndex == -1) {
      newString += ltr;
      continue;
    }
    if (lowercaseIndex != -1) {
      newIndex = lowercaseIndex + shift_factor;
      if (newIndex < 0) {
        newIndex = 26 + newIndex;
      }
      if (newIndex > 25) {
        newIndex %= 26;
      }
      newString += lowercase[newIndex];
      continue;
    }
    if (uppercaseIndex != -1) {
      newIndex = uppercaseIndex + shift_factor;
      if (newIndex < 0) {
        newIndex = 26 + newIndex;
      }
      if (newIndex > 25) {
        newIndex %= 26;
      }
      newString += uppercase[newIndex];
      continue;
    }
  }
  return newString;
};

module.exports = { caesarCipher };
