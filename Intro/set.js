/*

The entries() method of Set instances returns a new set iterator object that contains
an array of [value, value] for each element in this set, in insertion order. For Set 
objects there is no key like in Map objects. However, to keep the API similar to the 
Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned.
Methods of Set

1. add() -done - add element
2. clear() -done - empty the set
3. delete() -done - delete element , pass the element
4. entries()
5. forEach()
6. has() -done
7. keys()
8. values()

*/

const mySet1 = new Set();
mySet1.add(1);
mySet1.add(2);
mySet1.add(3); //  { 1, 2, 3 }

mySet1.delete(1); // Removed 1 from the set  { 2, 3 }
console.log(mySet1.has(5));
console.log(mySet1.has(2));

mySet1.has(1);
// mySet1.clear(); Set(0) {}

const iterator = mySet1.entries();

for (const entry of iterator) {
  console.log(entry);
}
console.log(mySet1.entries());

for (const [key, value] of mySet1.entries()) {
  console.log(key, value);
}

// There are no key for set but it works the same as map

mySet1.clear();

mySet1.add(42);
mySet1.add("forty two");

const iterator1 = mySet1.values();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

mySet1.clear();

mySet1.add(42);
mySet1.add("forty two");

const iterator2 = mySet1.keys();
console.log(iterator2);

console.log(iterator2.next().value); // "foo"
console.log(iterator2.next().value); // "bar"
