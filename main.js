import { hashMap } from "./hashMap.js";

const test = hashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.currentLoadFactor());

test.set('hat', 'black');
console.log(test.currentLoadFactor());

test.set('moon', 'silver');
console.log(test.currentLoadFactor());
console.log(test.length());

console.log(test.get('dog'));
console.log(test.has('monkey'));
console.log(test.values());

test.remove('kite');
console.log(test.entries());
console.log(test.keys());
test.clear();
console.log(test.entries());
