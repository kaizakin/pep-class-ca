function transformArray(arr) {
  return arr.map(num => {
    if (num % 2 === 0) {
      return num * num; 
    } else {
      return num; 
    }
  });
}

const input = [2, 3, 4, 5, 6];
const output = transformArray(input);
console.log(output); 
