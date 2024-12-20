export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));

    for (let i = jump; i < breaks.length; i = i + jump) {
        if (breaks[i]) {
            for (let j = i - jump; j <= i; j++) {
                if (breaks[j]) return j;
            }
            break;
        }
    }

    return -1;
}
