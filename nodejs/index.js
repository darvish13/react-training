console.clear()
console.log("\n")

/**
 * @__0 Variables
 */

// normal variables defined with let
// let name = 'ali'
// console.log('initial name:', name);

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

// template strings
// console.log(`\nMy name is ${name} and my lastname is ${lastName}`);

// length of an string
// const text = 'test'
// console.log(`\nlength of the text is ${text.length} characters`);

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
const person = {
  name: "rojin",
  lastName: "taghadosi",
  age: 26,
  education: "bachelor",
  major: "IT",
  interests: ["restaurants", "shopping", "traveling", "cats"],
  country: "Iran unfortunately",
}

// access an object key
// console.log(`The person's name is "${person.name}"`)
// console.log(`The person's second interest is "${person.interests[1]}"`)

// adding key values to an object
// person.favCountry = "canada"
// console.log(`The person's favourite country is: "${person.favCountry}"`)

// mixing arrays and objects
const person_2 = {
  name: "mohammad",
  lastName: "tabatabaei",
  age: 27,
  education: "bachelor",
  major: "Civil Engineering",
  interests: ["photography", "restaurants", "gym", "decoration"],
  country: "Iran unfortunately",
}

const personsList = [person, person_2]
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

console.log("\n")
