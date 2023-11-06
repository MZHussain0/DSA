// write a function which helps to achieve multiply(a)(b) and returns a product of a and b

const multiply = (a) => {
  return (b) => {
    return a * b;
  };
};

console.log(multiply(5)(2));
