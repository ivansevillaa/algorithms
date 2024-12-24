import { searchMatrix } from "../74.search-2d-matrix";

test("search-insert-position", function () {
    const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
    ];

    expect(searchMatrix(matrix, 3)).toBe(true);
    expect(searchMatrix(matrix, 13)).toBe(false);
    expect(searchMatrix(matrix, 61)).toBe(false);
    expect(searchMatrix(matrix, 35)).toBe(false);
    expect(searchMatrix(matrix, 23)).toBe(true);
});
