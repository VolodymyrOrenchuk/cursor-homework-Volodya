function* createIdGenerator(end = Infinity) {
    for (let i = 1; i < end; i++) {
        yield i
    }
}

const idGenerator = createIdGenerator()
// console.log(idGenerator.next().value)
// console.log(idGenerator.next().value)
// console.log(idGenerator.next().value)
// console.log(idGenerator.next().value)

function* newFontGenerator(i) {
    let current = i;
    while (true) {
        let type = yield current;
        if (type === "up") {
            current += 2;
        } else if (type === "down") {
            current -= 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next("up").value);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next("down").value);
// console.log(fontGenerator.next().value);

