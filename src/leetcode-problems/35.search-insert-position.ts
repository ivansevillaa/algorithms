export function searchInsert(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length;
    let lastValue = 0;
    let lastIndex = 0;

    while (low < high) {
        const middle = Math.floor(low + (high - low) / 2);
        const value = nums[middle];
        if (value === target) {
            return middle;
        } else if (value < target) {
            low = middle + 1;
        } else if (value > target) {
            high = middle;
        }

        lastValue = value;
        lastIndex = middle;
    }

    return lastValue > target ? lastIndex : lastIndex + 1;
}
