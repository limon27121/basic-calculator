const addNumbers = () => {
  const num1 = document.getElementById("1stnum");
  const num2 = document.getElementById("2ndnum");
  const firstnum = parseFloat(num1.value);
  const secondnum = parseFloat(num2.value);
  const sum = firstnum + secondnum;
  let result = document.getElementById("result");
  result.innerHTML = sum;
};

const subNumbers = () => {
  const num1 = document.getElementById("1stnum");
  const num2 = document.getElementById("2ndnum");
  const firstnum = parseFloat(num1.value);
  const secondnum = parseFloat(num2.value);
  const sub = firstnum - secondnum;
  let result = document.getElementById("result");
  result.innerHTML = sub;
};
const mulNumbers = () => {
  const num1 = document.getElementById("1stnum");
  const num2 = document.getElementById("2ndnum");
  const firstnum = parseFloat(num1.value);
  const secondnum = parseFloat(num2.value);
  const mul = firstnum * secondnum;
  let result = document.getElementById("result");
  result.innerHTML = mul;
};
const divNumbers = () => {
  const num1 = document.getElementById("1stnum");
  const num2 = document.getElementById("2ndnum");
  const firstnum = parseFloat(num1.value);
  const secondnum = parseFloat(num2.value);
  const div = firstnum / secondnum;
  let result = document.getElementById("result");
  result.innerHTML = div;
};
