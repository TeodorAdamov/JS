const obj = {};

Object.defineProperty(obj, 'myProperty', {
  value: 42,
  configurable: false,
  enumerable: true,
  writable: true
});

console.log(obj.myProperty); // 42

// You can change the value of the property
obj.myProperty = 100;

console.log(obj.myProperty); // 100

// But you cannot change its configurability
Object.defineProperty(obj, 'myProperty', {
  writable: false // This will result in an error
});