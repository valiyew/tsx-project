const numbers = Array.from({ length: 81 }, (_, i) => i + 1);

const arrays: any = [];
const chunkSize = 9;

while (numbers.length > 0) {
  arrays.push(numbers.splice(0, chunkSize));
}

export default arrays

console.log(arrays);
