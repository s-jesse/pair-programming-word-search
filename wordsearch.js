// pair programming done with @mhosseinsafi
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let vertStr = "";
    for (let j = 0; j < letters.length; j++) {
      vertStr += letters[j][i];
    }
    verticalJoin.push(vertStr);
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;