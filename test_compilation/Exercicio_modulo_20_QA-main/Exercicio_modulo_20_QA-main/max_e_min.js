function maxEMim(a, b) {
  if (b === 0) {
    return a;
  } else {
    return maxEMim(b, a % b);
  }
}

console.log(maxEMim(5, 25));

