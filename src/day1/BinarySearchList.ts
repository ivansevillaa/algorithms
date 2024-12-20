export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        const middle = Math.floor((low + high) / 2);
        const value = haystack[middle];

        if (value === needle) {
            return true;
        } else if (value < needle) {
            low = middle + 1;
        } else if (value > needle) {
            high = middle;
        }
    }

    return false;
}
