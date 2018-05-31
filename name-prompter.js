name = prompt("Enter your name");
age = prompt("Enter your age");

if (age > 0) {
  alert("Hi, " + name);
  
  if (age >= 18) {
    alert("You are allowed to vote");
  } else {
    alert("You'd have to wait for " + (18-age) + " years to get official voting rights!");
  }
} else {
  alert("Age can't be less than equal to 0!");
} 
