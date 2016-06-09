function* count() {
    console.log('before yielding 1');
    yield 1;
    console.log('before yielding 2');
    yield 2;
    console.log('before yielding 3');
    yield 3;
    console.log('before finishing');
}

const counter = count();
const counter2 = count();
const counter3 = counter;

let a = counter.next();
console.log(a);
a = counter.next();
console.log(a);

let b = counter2.next();
console.log(b);
b = counter2.next();
console.log(b);
b = counter2.next();
console.log(b);
b = counter2.next();
console.log(b);

b = counter2.next();
console.log(b);