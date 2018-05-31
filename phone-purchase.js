ac = prompt("Enter money in your account");
ac = Number(ac);

phone = prompt("Enter phone price");
phone = Number(phone);

acc = prompt("Enter accessory price");
acc = Number(acc);

phone += acc;

total = 0;

while (ac - phone > 0) {
  ac -= phone;
  
  total += Number(phone);
  
  if (total <= ac) {
    phone = prompt("Enter phone price");
    phone = Number(phone);

    acc = prompt("Enter accessory price");
    acc = Number(acc);
    
    phone += acc;
  }
}

alert("Total cost of perchase is: " + total);
