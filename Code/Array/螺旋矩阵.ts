/***
 * 
 * 1，2
 * 4，3
 * 
 * 1，2，3
 * 8，9，4
 * 7，6，5
 * 
 *  --->
 * |    |
 * |    |
 *  <---
 */

function _screw(size: number = 3) {
    const result = new Array(size).fill(0).map(() => new Array(size).fill(0))
    let loop = 1, start = 0, end = size - 1;
    for (let i = 0, len = Math.pow(size, 2) - 1; i <= len; i++) {

        if (loop === 1) {
            // 0, 1
            console.log('i', i, start)
            result[start][start + i % (size - 1)] = i + 1
        } else if (loop === 2) {
            // 2, 3
            result[i % (size - 1)][end] = i + 1
        } else if (loop === 3) {
            // 4, 5
            result[end][size - (i % (size - 1)) - 1] = i + 1
        } else {
            // 6, 7
            result[size - 1 - (i % (size - 1))][start] = i + 1
        }

        // 1,2,3,4,
        // 12,16,14,15,
        // 11,0, 0,6
        // 10,9,8,7

        // 0 1
        // 2 3 
        // 4 5
        if (i + 1 === (size - 1) * loop) {
            loop += 1
            if (loop > 4) {
                start += 1;
                end -= 1;
                loop = 1
            }
        }

    }
    return result
}

export {
    _screw
}