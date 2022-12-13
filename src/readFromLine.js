const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
interface.question("size of an array : ", async (inp) => {
  for (let i = 0; i < inp; i++) {
    await new Promise((res) => {
      interface.question("name", (student) => {
        arr.push(student);
        res();
      });
    });
  }
  console.log(arr);
  interface.close();
});

// console.log("test");
