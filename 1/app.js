let allMult = []
let range = 100
let multOf = [3,5]

const sumArr = (arr) => {
    return console.log(arr.reduce((a, b) => a + b, 0))
}
const isMultOf = (n, m) => {
    if (n >= m) {
        return n % m > 0 ? false : true
    }
}
const resolveChallenge = () => {
    multOf.forEach(mult => {
        for (let i = 0; i < range; i++) {
            isMultOf(i,mult) ? allMult.push(i) : false
        }
    });
    sumArr(allMult)
}

resolveChallenge()