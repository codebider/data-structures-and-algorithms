const HashMap = require('./HashMap');

const hashMap = new HashMap(3);

hashMap.set(3, 4);
hashMap.set(4, 10);

console.log(hashMap.get(3));
console.log(hashMap.get(4));
hashMap.remove(4)
console.log(hashMap.get(3));
