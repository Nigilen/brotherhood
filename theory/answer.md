ОТВЕТ: Код выводит 4 раза undefined


Вариант модификации 1: меняем var на let
const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}



Вариант модификации 2: присваиваем функцию переменной, другими слвами: используем функциональное выражение вместо объявления функции

const arr = [10, 12, 15, 21];

const goodBad = (i) => {
  console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
}

for (let i = 0; i < arr.length; i++) {
  setTimeout(goodBad(i), 3000)
}



(допчик) Вариант модификации 3: убираем вообще setTimeout, нам же важен только ответ...xDDD

const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
}



(допчик) Вариант модификации 4: а может ну его for? юзнем forEach ;)

const arr = [10, 12, 15, 21];

arr.forEach((i) => {
  setTimeout(function() {
    console.log(i > 13 ? `Good: ${i}` : `Bad: ${i}`)
  }, 3000)
})