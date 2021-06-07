// 精度溢出情况 right or left >= Math.Max
// middle 取值情况


/**
 * 
 * @param numbers [1, 2, 3, 4, 5, 6, 7, 8]
 * @param value 3
 * 
 * [1, 2, 3] -> [2, 3] -> [3] -> 3
 * 
 * @returns 2
 */

// [] 边界
function _sort(numbers: number[], value: number): number {
    let left = 0, right = numbers.length - 1
    while(left <= right) {
        const middle = Math.floor(left + ((right - left) / 2))
        if (numbers[middle] < value) {
            left = middle + 1
        } else if (numbers[middle] > value) {
            right = middle - 1
        } else {
            return middle
        }
    }
    return - 1
}


/**
 * 
 * @param numbers [1, 2, 3, 4, 5, 6, 7, 8]
 * @param value 3
 * 
 * [1, 2, 3, 4] -> [2, 3, 4] -> 3
 * 
 * @returns 2
 */

// [) 边界
function __sort(numbers: number[], value: number): number {
    let left = 0, right = numbers.length - 1
    while(left < right) {
        const middle = Math.floor(left + ((right - left) / 2))
        if (numbers[middle] < value) {
            left = middle + 1
        } else if (numbers[middle] > value) {
            right = middle
        } else {
            return middle
        }
    }
    return -1
}

export {
    _sort,
    __sort
}