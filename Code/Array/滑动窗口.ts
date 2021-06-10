
// 滑动窗口
function _sliderWindow(numbers: number[], max: number) {
    let head = 0, tail = 0;
    let step = 0
    while(tail <= numbers.length - 1) {
        if (numbers.slice(tail, head + 1).reduce((x, y) => {
            x += y
            return x
        }, 0) >= max && tail <= tail) {
            step = numbers.slice(tail, head + 1).length
            tail++
        } else {
            head++
        }
    }
    return step
}

export {
    _sliderWindow
}