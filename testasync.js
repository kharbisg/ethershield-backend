const fs = require("fs");

const myOwnAsync = () => {
  //console.log("mysycn");
  return "myasync";
};

const getList = async () => {
  try {
    // const data = await fs.readFile(
    //   "/Users/paraskharbanda/ethershield/package-lock.json",
    //   () => {}
    // );
    console.log("before await");
    const data = await myOwnAsync();
    console.log("called inside async function");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
// console.log("1");
// getList();
// console.log("2");

class MyClass {
  constructor() {
    this.current = 20;
    this.increment_and_print = this.increment_and_print.bind(this);
    setTimeout(this.increment_and_print);
  }

  increment_and_print() {
    this.current += 1;
    console.log(this.current);
  }
}

const mc = new MyClass();
// mc.increment_and_print();
// mc.increment_and_print();
// mc.increment_and_print();
// mc.increment_and_print();
// mc.increment_and_print();
// mc.increment_and_print();
