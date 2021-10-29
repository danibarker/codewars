const countBy = (x, n) => {
    let arr = []
    for (let i = x; i <= x * n; i += x){
        arr.push(i)
    }
    return arr
}
console.log(countBy(5,37))

module.exports = countBy