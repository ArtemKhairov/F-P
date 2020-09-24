// immutability
// неизменяемость

// let color_lawn = {
//   title: 'lawn',
//   color: '#00ff00',
//   rating:0
// }

// Прямое изменение объекта
// function rateColor(color, rating) {
//   color.rating = rating
//   return color
// }

// console.log(rateColor(color_lawn, 5).rating)
// console.log(color_lawn.rating)

// Объект не изменяется
// var rateColor = function (color, rating) {
//   return Object.assign({},color,{rating:rating})
// }

// console.log(rateColor(color_lawn, 5).rating)
// console.log(color_lawn.rating)


// let list = [
//   { title: "Rad Red" },
//   { title: "Lawn" },
//   { title: "Party Pink" }
// ]

// const addColor = (title, array) => array.concat({ title })


// console.log(addColor("Glam Green", list).length)
// console.log(list.length)


// Чистые функции
// 1) Получает как минимум 1 аргумент
// 2)Возвращает значение или другую функцию
// 3)Фунекия не должна вносить изменения в аргументы


// Создает побочный эффект, вносит изменения в DOM
// function Header(text) {
//   let h1 = document.createElement('h1');
//   h1.innerText = text;
//   document.body.appendChild(h1);
// }


// Не вызывает побочных эффектов
// const Header = (props) => <h1>{props.title}</h1>



// Преобразование данных
// const schools = [
//   "Yorktown",
//   "Washington & Lee",
//   "Wakefield"
// ]
// console.log(schools.join(' разделитель '))

// Возвращает новый массив с подходящими условиями
// const wSchools = schools.filter(school => school[0] === 'W')
// console.log(wSchools)


// Удаляем ненужный элемент
// const cutSchool = (cut, list) =>
//   list.filter(school => school !== cut)

// console.log(cutSchool("Wakefield",schools).join(" разделитель "))


// Внесение изменений в массив и возвращение нового
// const highSchools = schools.map(school => `${school} High School`)
// console.log(highSchools)


// const highSchools = schools.map(school => ({ name: school }))
// const highSchools = schools.map(school => ([`name ${school}`]))
// console.log(highSchools)
// console.log(schools)

// const schools = [
//   { name: "York" },
//   { name: "Stan" },
//   { name: "Bright" },
//   { name: "Los" }
// ]


// Замена имени в массиве
// const editName = (oldName, name, arr) =>
//   arr.map(item => {
//     if (item.name === oldName) {
//       return { ...item, name }
//     }
//     else {
//       return item
//     }
//   });

// const editName = (oldName, name, arr) =>
//   arr.map(item => (item.name === oldName) ?
//     ({ ...item, name }) :
//     item
//   )


// let updatedSchools = editName("Los", "Kras", schools)
// console.log(updatedSchools)


// Преобразование объекта в массив

// const schools = {
//   "Yorktown": 10,
//   "Washington & Lee": 2,
//   "Wakefield" : 5
// }

// const schoolArray = Object.keys(schools).map(key =>
//   ({
//     name: key,
//     wins:schools[key]
//   })
// )

// console.log(schoolArray)


// Поиск большего числа
// const ages = [21, 23, 88, 554, 12, 1, 0]

// const maxAge = ages.reduce((max, age) => {
//   console.log(`${age}>${max}=${age > max}`);
//   if (age > max) {
//     return age
//   } else {
//     return max
//   }
// }, 0)

// console.log('maxAge', maxAge);


// Рекурсия

// const countdown = (value, fn) => {
//   fn(value)
//   return(value>0) ? countdown(value-1,fn):value
// }

// countdown(10, value => console.log(value));

const countdown = (value, fn, delay = 1000) => {
  fn(value)
  return (value > 0) ? 
    setTimeout(() => countdown(value - 1, fn), delay) :
    value
}

const log = value => console.log(value)
countdown(10, log);