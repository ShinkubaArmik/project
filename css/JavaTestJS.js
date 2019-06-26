var positions = [
  'Отвертка ультрозвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
]

var lego = positions[4]
positions.splice(4,1)       //  ----------------------------снял 5 поз.
var a = positions.length;
console.log("Список наименований: " );
for(var i = 0;i<a;i++){

  
  console.log(i+1 +'.' +positions[i] );

}

console.log("Окончательный список наименований: " );

var positions2= [
'Экзоскелет Trooper-111',
'Нейроинтерфейс игровой SEGUN',
'Семена дерева Эйва'
]
var b = positions2.length;
for(var i=0;i<b;i++){
  console.log(i+1 + "."+positions2[i])
}
console.log(lego);
var perv = [
  'Отвертка ультрозвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',

]
console.log("Принять в первую очередь: ")

var z = perv.length;
for (var i=0;i<z;i++){
  
  console.log(i+1 + "."+perv[i])
}

/*let sum = [2,3,4,5]
sum.push(6);
sum.push("hello");
console.log(sum);
sum.pop()
sum.pop()
sum.shift()
sum.unshift("Кукуцу")

console.log(sum)

console.log(sum.join(" "))
let j = sum.slice(0,3)
console.log(j)*/

/*let a=[-2,6];
for(let i=a[0];i<a[1];i++){
  a.push(i)
}
console.log(a)*/


/*do {
  for (var i = 0; i < 100; a++) {  /// --------------  ошибки вместо i a
     console.log(i);
   }
} while (false);*/

/*var fruits = ['Яблоко', 'Банан'];

console.log(fruits);
*/
/*var arr = ['первый элемент', 'второй элемент', 'последний элемент'];
//console.log(arr[0]);              // напечатает 'первый элемент'
//console.log(arr[1]);              // напечатает 'второй элемент'
console.log(arr[arr.length - 1]);


var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
   // синтаксическая ошибка
console.log(years[0],years[1])
console.log([])
console.log([])
console.log([])
*/

