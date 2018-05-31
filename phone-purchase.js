const TAX_RATE = 0.08;

threshold = prompt("Enter spending threshold:");

ac = prompt("Enter money in your account");
ac = Number(ac);

total = Number(0);

while (total < ac) {
  // buy a phone 
  phone = prompt("Enter phone price");
  phone = Number(phone);
  
  total += phone;
  
  if (total < threshold) {
    acc = prompt("Enter accessory price");
    acc = Number(acc);
    total += acc;
  }
}

// tax

total += total * TAX_RATE;

console.log("Total Amount: " + total);

if (total > ac) {
  alert("NOT VIABLE");
} else {
  alert("VIABLE");
}
