
import HashMap from "./hashmap.js";
import HashSet from "./hashset.js";

let test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');

console.log('HashMap Entries:', test.entries());
console.log('HashMap Length:', test.length());
console.log('HashMap Capacity:', test.getCapacity());

console.log('Get value for "apple":', test.get('apple'));
console.log('Has "banana"?', test.has('banana'));
console.log('Remove "carrot":', test.remove('carrot'));
console.log('HashMap Entries after removal:', test.entries());
console.log('HashMap Length after removal:', test.length());


test = new HashSet();

test.set('apple');
test.set('banana');
test.set('carrot');
test.set('dog');
test.set('elephant');
test.set('frog');

console.log('HashSet Entries:', test.entries());
console.log('HashSet Length:', test.length());
console.log('HashSet Capacity:', test.getCapacity());

console.log('Contains "apple"?', test.has('apple'));
console.log('Remove "banana":', test.remove('banana'));
console.log('HashSet Entries after removal:', test.entries());
console.log('HashSet Length after removal:', test.length());

