let fruits = ["Olma", "Banan", "Uzum", "Anor"];

alert(" Array uzunligi: " + fruits.length);


console.log("Boshlang'ich array:", fruits);


let remove = confirm(" Arraydan bitta elementni o‘chirmoqchimisiz?");



if (remove) {
  fruits.pop();
 alert("Endi array uzunligi: " + fruits.length);
  console.log("Yangilangan array:", fruits);
} else {
  alert("Array o‘zgarmadi. Uzunligi: " + fruits.length);
}