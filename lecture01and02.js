/*const o = new Object();
o.firstName = "Guru";
o.lastName = "Prasanth";
o.isTeaching = true;
o.greet = function () {
  console.log("Hello");
};
console.log(o);

const o2 = {};
o2.firstName = "GP";
o2["lastName"] = "GURU";
const key = "isTeaching";
o2[key] = false;
o2["greet"] = function () {
  console.log("HI GP");
};

console.log(o2);

const o3 = {
  firstName: "Guru",
  lastName: "GP",
  isTeaching: false,
  greet: function () {
    console.log("hello guru");
  },
};
console.log(o3);

const onest = {
  firstName: "guru",
  lastName: "Prasanth",
  address: {
    streetName: "Bose street",
    pincode: 641407,
  },
  isTeaching: true,
  greet: function () {
    console.log("Heoolo nersted object");
  },
};

console.log(onest);

console.log(onest.address.streetName);

console.log(onest.address["pincode"]);

console.log(onest.address.pincode);
*/
/*
const o = {
  a: "a",
  b: "b",
  c: {
    keyc: "VALUE",
  },
};

//const o2 = Object.assign({}, o);

//o.a = "new value";
//o.c.key = "new assigned";

//console.log(o2.c);

function deepCopy(obj) {
  const keys = Object.keys(obj);

  const newObject = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[key] === "object") {
      newObject[key] = deepCopy(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}

const o3 = deepCopy(o);

o.c.keyc = "changed";

console.log(o3);

console.log(o3.c.keyc);
*/
// const check = (function () {
//   const arr = [];

//   for (let i = 0; i < 5; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// })();

// console.log(check[0].toString());
// check[0]();
// console.log(typeof i);

// const counter = (function () {
//   let count = 0;

//   return {
//     inc: function () {
//       count = count + 1;
//     },
//     get: function () {
//       console.log(count);
//     },
//   };
// })();

// counter.inc();
// counter.get();

// function printOne() {
//   console.log("one");
// }

// function printTwo() {
//   console.log("Two");
// }

// function printThree() {
//   console.log("Three");
// }

// setTimeout(printTwo, 0);
// setTimeout(printOne, 0);
// setTimeout(printThree, 0);

// printThree();

// function addOne(num) {
//   return num + 1;
// }

// function getOne() {
//   return addOne(10);
// }

// function c() {
//   console.log(getOne() + getOne());
// }

// c();

// const person = {
//   name: "Jordan",
//   greet: () => {
//     console.log(`hello ${this.name}`);
//   },
// };

// person.greet();
