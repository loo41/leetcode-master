
//双滑块
function _orderPow(numbers: number[]): number[] {
    let pointerLeft = 0, pointerRight = numbers.length - 1;

    const result = []
    while(numbers.length && pointerLeft <= pointerRight) {
        const leftNumberPow = Math.pow(numbers[pointerLeft], 2)
        const rightNumberPow = Math.pow(numbers[pointerRight], 2)
        if (leftNumberPow > rightNumberPow) {
            result.unshift(leftNumberPow)
            pointerLeft++
        } else {
            result.unshift(rightNumberPow)
            pointerRight--
        }
    }

    return result
}

export {
    _orderPow
}