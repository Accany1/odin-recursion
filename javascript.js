const fibs = (n) => {
    let numlist = [0,1]
    let n1 = 0
    let n2 = 1

    if (n === 0) {
        numlist = [0]
        return numlist
    } else if (n === 1) {
        numlist = [0, 1]
        return numlist
    }

    for (let i = 2; i < n; i++) {
        let next = n1 + n2
        n1 = n2
        n2 = next
        numlist.push(next)
    }
    return numlist
}

const fibsRec = (n) => {
    if (n === 1) {
        return [0]
    } else if (n === 2) {
        return [0, 1]
    } else {
        return [...fibsRec(n - 1), fibsRec(n - 1)[n-2] + fibsRec(n - 1)[n-3]]
    }
}


console.log(fibs(10))

console.log(fibsRec(10))