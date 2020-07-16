var text = "Saya ingin belajar bersama";
var text_arr = text.split(" ");

text_arr.forEach(function (item, index, array) {
  console.log("Item : ", item, " Index ke ", index);
});
