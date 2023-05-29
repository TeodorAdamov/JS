function spiralMatrix(n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
      matrix[i] = new Array(n);
    }

    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    let counter = 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
      // Traverse right
      for (let i = colStart; i <= colEnd; i++) {
        matrix[rowStart][i] = counter++;
      }
      rowStart++;

      // Traverse down
      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][colEnd] = counter++;
      }
      colEnd--;

      // Traverse left
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = counter++;
      }
      rowEnd--;

      // Traverse up
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = counter++;
      }
      colStart++;
    }

    return matrix;
  }

  // Example usage:
  const size = 4;
  const result = spiralMatrix(size);
  console.log(result.join('\n'));