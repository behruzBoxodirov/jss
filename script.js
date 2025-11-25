let fruits = ["olma", "banan", "gilos", "shaftoli"];

// Saytga kirganda
alert("Salom! Arraydan bitta element olib tashlaylikmi?");

// Ha / Yo‘q so‘rashi
let answer = confirm("Olib tashlashni xohlaysizmi?");

// Agar ha bo‘lsa
if (answer) {
  // Tasodifiy index
  let randomIndex = Math.floor(Math.random() * fruits.length);

  // Oʻchiriladigan meva
  let removedFruit = fruits[randomIndex];

  // Oʻchiramiz (shift va remove ishlatmasdan)
  fruits.splice(randomIndex, 1);

  alert("Siz '" + removedFruit + "' mevasini olib tashladingiz!");
} else {
  alert("Hech narsa olib tashlanmadi!");
}

console.log("Qolgan mevalar: ", fruits);