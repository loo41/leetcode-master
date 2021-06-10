
/**
 * 
 * @param numbers [1, 6, 3, 4, 5, 6, 7, 6]
 * @param value 6
 * 
 */

// 双滑块

function _remove(numbers: number[], remove: number) {
    let pointerLeft = 0, pointerRight  = 0;
    for (let i = 0, len = numbers.length; i < len; i++) {
        if (numbers[i] === remove) {
            pointerRight += 1
            continue;
        }

        numbers[pointerLeft] = numbers[pointerRight]

        ++pointerLeft
        ++pointerRight
    }

    return numbers.slice(0, pointerLeft)
}

export {
    _remove
}