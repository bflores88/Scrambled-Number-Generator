module.exports = function(n) {
  // do work here
  if (typeof n !== 'number') {
    return false;
  }

  let scrambled = [0];

  for (let i = 1; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * (n - 1)) + 1;
    scrambled.push(randomNumber);
  }

  return scrambled;
};
