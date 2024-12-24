export function searchMatrix(matrix: number[][], target: number): boolean {
    const rowsLength = matrix.length;
    const columnsLength = matrix[0].length;

    let low = 0;
    let high = rowsLength;
    let lastValue = 0;
    let lastIndex = 0;

    while (low < high) {
        const middle = Math.floor(low + (high - low) / 2);
        const value = matrix[middle][columnsLength - 1];
        if (value === target) {
            return true;
        } else if (value < target) {
            low = middle + 1;
        } else if (value > target) {
            high = middle;
        }

        lastValue = value;
        lastIndex = middle;
    }

    const rowToSearchIndex = lastValue > target ? lastIndex : lastIndex + 1;

    if (rowToSearchIndex > rowsLength - 1) return false;

    low = 0;
    high = columnsLength;
    while (low < high) {
        const middle = Math.floor(low + (high - low) / 2);
        const value = matrix[rowToSearchIndex][middle];
        if (value === target) {
            return true;
        } else if (value < target) {
            low = middle + 1;
        } else if (value > target) {
            high = middle;
        }
    }

    return false;
}
