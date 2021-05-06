console.clear()
console.log("\n")

/**
 * @__0 Variables
 */

// normal variables defined with let
// let name = 'ali'
// console.log('initial name:', name)

// name = 'alireza'
// console.log('changed name:', name);

// constant variables defined with const
// const constName = 'rojin'

// new line
// console.log('\n')
// console.log('initial const name:', constName);

// constName = 'roj'
// console.log('changed const name:', constName);

/**
 * @__1 strings
 */

// concating
// const name = 'ali'
// const lastName = 'lavasani'
// console.log( name + ' ' + lastName);
// console.log(2 + 3)
// console.log('2' + '3')

// template strings
// console.log(`My name is "${name}" and my lastname is "${lastName}"`);

// length of an string
// const text = 'test'
// console.log(`length of the text is "${text.length}" characters`);

/**
 * @__2 Arrays
 */

// array definition
// const names = ["alireza", "farzaneh", "mohammad", "rojin"]
// console.log(names, '\n')

// length of array
// console.log(`There are ${names.length} names in names array\n`)

// add to end of array
// names.push("kimia")
// console.log(names, '\n')

// access array element with index, index starts from 0
// console.log(
//   `The first name in the list is ${names[0]} and the last one is ${
//     names[names.length - 1]
//   }`
// )

// remove an item from end of array
// names.pop()

// console.log(
//   `\nThe first name in the list is ${names[0]} and the last one is ${
//     names[names.length - 1]
//   }`
// )

/**
 * @__3 Objects
 */
// const person = {
//   name: "rojin",
//   lastName: "taghadosi",
//   age: 26,
//   education: "bachelor",
//   major: "IT",
//   interests: ["restaurants", "shopping", "traveling", "cats"],
//   country: "Iran unfortunately",
// }

// access an object key
// console.log(`The person's name is "${person.name}"`)
// console.log(`The person's second interest is "${person.interests[1]}"`)

// adding key values to an object
// person.favCountry = "canada"
// console.log(`The person's favourite country is: "${person.favCountry}"`)

// mixing arrays and objects
// const person_2 = {
//   name: "mohammad",
//   lastName: "tabatabaei",
//   age: 27,
//   education: "bachelor",
//   major: "Civil Engineering",
//   interests: ["photography", "restaurants", "gym", "decoration"],
//   country: "Iran unfortunately",
// }

// const personsList = [person, person_2]
// console.log(`The name of the second person is: "${person_2.name}"
// and his interests are: "${person_2.interests}" 
// `)

// console.log(`The name of the second person is: "${personsList[1].name}"
// and his interests are: "${personsList[1].interests}" 
// `)


// console.log(
//   `The name of the second person is: "${personsList[1].name}" and the 3rd interest of the first person is: "${personsList[0].interests[2]}"`
// )

/**
 * @__4 Operators
 */
// const flag = true

// equality operator
// console.log(`the result of 5 == '5' is: "${5 == '5'}"`)
// console.log(`but the result of 5 === '5' is: ${5 === '5'}\n`)

// Not operator
// console.log(`flag: "${flag}" and !flag: "${!flag}"\n`)
// console.log(`result of !flag != true is: "${!flag != true}"`)

// && and || operator
// console.log(flag && 'The previous condition was true')
// console.log(!flag || 'The previous condition might be true or false\n')

// ternary operator
// console.log(flag ? 'the condition was true' : 'the condition was false')

/**
 * @__5 Loops
 */
// const names = ["alireza", "mohammad", "farzaneh", "rojin"]

// Manual length
// for (let index = 0; index < 4; index++) {
//   console.log(names[index])
// }

// Calculated length
// for (let index = 0; index < personsList.length; index++) {
//   const person = personsList[index]
//   console.log(person.name)
// }

// Double loop
// for (let index = 0; index < personsList.length; index++) {
//   const person = personsList[index]
//   let personInterests = ''

//   for (let index2 = 0; index2 < person.interests.length; index2++) {
//     const interest = person.interests[index2]

//     personInterests = personInterests + ' , ' + interest
//     // personInterests = `${personInterests} ${personInterests.length > 0 ? ' , ' : ''} ${interest}`
//   }

//   console.log(`${person.name}'s interests are: ${personInterests}`)
// }

/**
 * @__6 Conditions
 */

/**
 * @__7 Functions
 */

/**
 * @__8 Anonymous functions
 */

/**
 * @__9 Asynchronous code
 */
// console.log(1);
// delayedLog(2);
// console.log(3);

// function delayedLog(number) {
//   setTimeout(function () {
//     console.log(number);
//   }, 2000);
// }

/**
 * @__10 Manipulating DOM
 */

/**
 * @__11 Calling Api with fetch
 */
// function getNameFromApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => console.log(data[0].name));
// }

// console.log("alireza lavasani");
// getNameFromApi();
// console.log("rojin taghadosi");


/**
 * @__practice
 */

// const data = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },
//   {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//       "street": "Douglas Extension",
//       "suite": "Suite 847",
//       "city": "McKenziehaven",
//       "zipcode": "59590-4157",
//       "geo": {
//         "lat": "-68.6102",
//         "lng": "-47.0653"
//       }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//       "name": "Romaguera-Jacobson",
//       "catchPhrase": "Face to face bifurcated interface",
//       "bs": "e-enable strategic applications"
//     }
//   },
//   {
//     "id": 4,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": {
//       "street": "Hoeger Mall",
//       "suite": "Apt. 692",
//       "city": "South Elvis",
//       "zipcode": "53919-4257",
//       "geo": {
//         "lat": "29.4572",
//         "lng": "-164.2990"
//       }
//     },
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": {
//       "name": "Robel-Corkery",
//       "catchPhrase": "Multi-tiered zero tolerance productivity",
//       "bs": "transition cutting-edge web services"
//     }
//   },
//   {
//     "id": 5,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": {
//       "street": "Skiles Walks",
//       "suite": "Suite 351",
//       "city": "Roscoeview",
//       "zipcode": "33263",
//       "geo": {
//         "lat": "-31.8129",
//         "lng": "62.5342"
//       }
//     },
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": {
//       "name": "Keebler LLC",
//       "catchPhrase": "User-centric fault-tolerant solution",
//       "bs": "revolutionize end-to-end systems"
//     }
//   },
//   {
//     "id": 6,
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//       "street": "Norberto Crossing",
//       "suite": "Apt. 950",
//       "city": "South Christy",
//       "zipcode": "23505-1337",
//       "geo": {
//         "lat": "-71.4197",
//         "lng": "71.7478"
//       }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//       "name": "Considine-Lockman",
//       "catchPhrase": "Synchronised bottom-line interface",
//       "bs": "e-enable innovative applications"
//     }
//   },
//   {
//     "id": 7,
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//       "street": "Rex Trail",
//       "suite": "Suite 280",
//       "city": "Howemouth",
//       "zipcode": "58804-1099",
//       "geo": {
//         "lat": "24.8918",
//         "lng": "21.8984"
//       }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//       "name": "Johns Group",
//       "catchPhrase": "Configurable multimedia task-force",
//       "bs": "generate enterprise e-tailers"
//     }
//   },
//   {
//     "id": 8,
//     "name": "Nicholas Runolfsdottir V",
//     "username": "Maxime_Nienow",
//     "email": "Sherwood@rosamond.me",
//     "address": {
//       "street": "Ellsworth Summit",
//       "suite": "Suite 729",
//       "city": "Aliyaview",
//       "zipcode": "45169",
//       "geo": {
//         "lat": "-14.3990",
//         "lng": "-120.7677"
//       }
//     },
//     "phone": "586.493.6943 x140",
//     "website": "jacynthe.com",
//     "company": {
//       "name": "Abernathy Group",
//       "catchPhrase": "Implemented secondary concept",
//       "bs": "e-enable extensible e-tailers"
//     }
//   },
//   {
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//       "street": "Dayna Park",
//       "suite": "Suite 449",
//       "city": "Bartholomebury",
//       "zipcode": "76495-3109",
//       "geo": {
//         "lat": "24.6463",
//         "lng": "-168.8889"
//       }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//       "name": "Yost and Sons",
//       "catchPhrase": "Switchable contextually-based project",
//       "bs": "aggregate real-time technologies"
//     }
//   },
//   {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//       "street": "Kattie Turnpike",
//       "suite": "Suite 198",
//       "city": "Lebsackbury",
//       "zipcode": "31428-2261",
//       "geo": {
//         "lat": "-38.2386",
//         "lng": "57.2232"
//       }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//       "name": "Hoeger LLC",
//       "catchPhrase": "Centralized empowering task-force",
//       "bs": "target end-to-end models"
//     }
//   }
// ]


console.log("\n")




