
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let ans = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      ans = ans.concat(matrix[i]);
    } else {
      ans = ans.concat(matrix[i].reverse());
    }
  }
  return ans;
}
