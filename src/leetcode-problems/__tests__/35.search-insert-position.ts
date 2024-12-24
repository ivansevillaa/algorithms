import { searchInsert } from "../35.search-insert-position";

test("search-insert-position", function () {
    const nums = [1, 3, 5, 6];
    expect(searchInsert(nums, 5)).toBe(2);
    expect(searchInsert(nums, 2)).toBe(1);
    expect(searchInsert(nums, 7)).toBe(4);
});
