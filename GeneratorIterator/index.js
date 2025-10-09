function createIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const iterator = {
        next() {
            let ans;

            if (nextIndex <= end) {
                ans = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return ans;
            }
            else {
                return { value: iterationCount, done: true };
            }
        }
    }

    return iterator;

}

// const it = createIterator(1, 10, 1);

// let ans = it.next();

// while (!ans.done) {
//     console.log(ans.value);
//     ans = it.next();
// }

// for (let it of createIterator(1, 10, 2)) {
//     console.log(it);
// } // It will not work because the object is not iterable, it throws error

/*
    still now we can't use the iterator with forEach, map, filter, reduce etc. Because 
    they expect an iterable object, which is an object that has a Symbol.iterator method.
    For that we need to make it a generator function.
*/

function* createGenerator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i <= end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const gen = createGenerator(1, 10, 1);

let answer = gen.next();

while (!answer.done) {
    console.log(answer.value);
    answer = gen.next();
}

for (let it of createGenerator(1, 10, 2)) {
    console.log(it);
} // It will work because the generator function returns an iterable object
