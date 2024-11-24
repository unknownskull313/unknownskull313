function calculate (operation) {
  const num1 = parseFloat (document.getElementById('num1').value)
  const num2 = parseFloat (document.getElementById('num2').value)

 switch (operation) {
  case '+' : result = num1 + num2;break;
  case '-' : result = num1 - num2;break;
  case '*' : result = num1 * num2;break;
  case '/' : if (num2 ===0) {alert("canot devide by zero!!");return;}  result = num1 / num2;break;
}
document.getElementById("result").textContent = result;
}