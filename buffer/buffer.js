// Buffer of 10 bytes
let buffer1 = Buffer.alloc(10);   // Initializes a buffer of size 10 bytes
console.log(buffer1);  // <Buffer 00 00 00 00 00 00 00 00 00 00>

// Creating a buffer from an existing array
let buffer2 = Buffer.from([1, 2, 3, 4]);
console.log(buffer2);  // <Buffer 01 02 03 04>

// Creating a buffer from an existing string
let buffer3 = Buffer.from('Hello World');
console.log(buffer3);  // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>


//to read

let buffer = Buffer.from('Hello');

console.log(buffer[0]);  // 72 (This is the ASCII code of 'H')
console.log(buffer.toString());  // 'Hello'


//manipulation
buffer[0] = 74;  // Changing the first byte to 72 ('H')
console.log(buffer.toString());  // 'Hello World' (No change here because it was already 'H')

//encoding
let buffer4 = Buffer.from('Hello World', 'utf8');
console.log(buffer4.toString('hex'));  // '48656c6c6f20576f726c64' (hexadecimal representation of string)
