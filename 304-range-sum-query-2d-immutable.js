/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    this.sum_matrix = new Array(rows + 1).fill(0).map(_ => new Array(cols + 1).fill(0));

    for (let i = 0; i < rows; i++) {
        let prefix = 0;
        for (let j = 0; j < cols; j++) {
            prefix += matrix[i][j];
            let above = this.sum_matrix[i][j + 1];
            this.sum_matrix[i + 1][j + 1] = prefix + above;
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let r1 = row1 + 1;
    let r2 = row2 + 1;
    let c1 = col1 + 1;
    let c2 = col2 + 1;

    let bottomRight = this.sum_matrix[r2][c2];
    let above = this.sum_matrix[r1 - 1][c2];
    let left = this.sum_matrix[r2][c1 - 1];
    let topLeft = this.sum_matrix[r1 - 1][c1 - 1];

    return bottomRight - above - left + topLeft;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */