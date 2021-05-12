const data = require("./data")
const staff = require("./Institute_data")
const university = require("./university")
const cocktail = require("./cocktail")
const weatherData = require("./Weather")
const weatherReport = require("./functions")
const randomNumbers = require("./data")
const chalk = require("chalk")
const axios = require("axios")
const printName = require("./functions")

// console.clear()
// console.log("\n")

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
//   interests: ["shopping", "traveling", "cats"],
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

// for (let index = 0; index < personsList.length; index++) {
//   // extracting required data from the list
//   const name = personsList[index].name  // index 0 name = rojin // index 1 name = mohammad
//   const lastName = personsList[index].lastName
//   const interests = personsList[index].interests

//   let beautifedInterests = ''

//   // looping over each person's interests
//   for (let index2 = 0; index2 < interests.length; index2++) {
//     const interest = interests[index2];

//     beautifedInterests = beautifedInterests + `*** ${interest} ***\n`
//   }

//   console.log(`The interests of "${name} ${lastName}" are:  \n`)
//   console.log(beautifedInterests)
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

// console.log(`\n Yesterday, I was thinking about the meaning of friendship,
// then I prepare a list containing data about all of my friends.
// Now, I would like to introduce one of them who is in the ${data[5].id}th place of my friends' list.
// She is our mutual friend, but I do not want to introduce her directly. So, I give hints to guess who she is.
// her first name starts with "${data[5].name[5]}",
// but you could probably not find out who she is, in that we usually call her as the family name which starts with "${data[5].name[12]}".
// As I remember, the first time that you sent her an email, she did not respond.
// And you told me that the email address must be wrong because it is not similar to her name at all.
// Never can I forget the eccentric email address which was "${data[5].email}"
// You decided to send her a gift via her zipcode, I also remembered the zipcode that was "${data[5].address.zipcode}"
// Yet again, she did not respond too. Afterwards, you arranged an appointment with "${data[6].name}" at a cafe located in "${data[8].address.street}" in order to consult with him about the problem.
// I think NOW you find out the my "${data[5].id}th friend in the list" is "${data[5].name}". `)

// console.log(`here is the list of my best friends:
// `)

// for (let index = 0; index < data.length; index++) {
//   const friends = data[index];
//   console.log(`${friends.id}. *** ${friends.name} from ${friends.address.city}`) ;
//   }

// console.log('That was awesome, Job well DONE!!!')

// const NamesWithK = []

// for (let index = 0; index <data.length; index++) {
//   const name =data[index].name
//   const street =(data[index].address.street).toLowerCase()

//   if (street[0] == 'k'){
//     NamesWithK.push(name)

//   }
// }
// console.log(NamesWithK.length);

//accessing the keys of an object***********

// // extracting the first element of the array
// const theFirstUser = data[0]

// // extracting the keys of the first object into an array
// const UserObjectKeys = Object.keys(theFirstUser)

// // looping over the UserObjectKeys to define key variables
// for (let index = 0; index < UserObjectKeys.length; index++) {
//   const key = UserObjectKeys[index];
//   // finding out the key values
//   console.log(`${key}: ${theFirstUser[key]}`);

// }
// console.log(UserObjectKeys);
// // console.log(Object.keys(theFirstUser)[2]);

// console.log(staff);
// console.log(cocktail);
// console.clear();
// // console.log(weatherData);
// const temperature = []
// const dataSeries = weatherData.dataseries
// for (let index = 0; index < dataSeries.length; index++) {
//   const condition = dataSeries[index];
//   temperature.push(condition.temp2m)

//   // coverClouds.push(Condition.cloudcover)
//   console.log(weatherReport(condition));

//   // console.log(weatherReport(Condition));

// }
// console.log(temperature);
// console.log(Math.min(...temperature), Math.max(...temperature));
// console.log(coverClouds);
// console.log(`the minimum is: ${Math.min(...coverClouds)} and the maximum is: ${Math.max(...coverClouds)}`);

// console.log(weatherReport());

// //Number 11 (first practice): to find the second biggest 4-digit number and to find the second smallest 5-digit number
// const fourDigit= []
// const fiveDigit= []
// for (let index = 0; index < randomNumbers.length; index++) {
//   const numbers = randomNumbers[index];
//   if (numbers< 10000 && numbers> 1000) {
//     fourDigit.push(numbers)
//   }
//   else if (numbers>10000) {
//     fiveDigit.push(numbers)
//   }
// }
// console.log(fourDigit);
// console.log(fiveDigit);
// const maximumFourDigit = Math.max(...fourDigit)
// const minimumFiveDigit = Math.min(...fiveDigit)
// const newListFourDigit = []
// const newListFiveDigit = []

// for (let index = 0; index < randomNumbers.length; index++) {
//   const numbers = randomNumbers[index];
//   if (numbers != maximumFourDigit && numbers <10000) {
//     newListFourDigit.push(numbers)
//   }
//   else if (numbers != minimumFiveDigit && numbers>10000) {
//     newListFiveDigit.push(numbers)
//   }

// }
// console.log(`the second maximum 4-digit number is: ${Math.max(...newListFourDigit)}
// and the second minimum 5-digit number is: ${Math.min(...newListFiveDigit)}`);

// // console.log(`the minimum number is: ${Math.min(...randomNumbers)} and the maximum number is: ${Math.max(...randomNumbers)}`);
// // Math.min(randomNumbers)

//Number 11 (first practice): to find the second biggest 4-digit number and to find the second smallest 5-digit number
// randomNumbers.sort
// console.log(randomNumbers.sort());
// const fiveDigit= []
// const fourDigit= []
// for (let index = 0; index < randomNumbers.length; index++) {
//   const number = randomNumbers[index];
//   if (number<10000 && number>1000) {
//     fourDigit.push(number)
//   }
//   else if (number>10000){
//     fiveDigit.push(number)
//   }
// }
// const fave = fourDigit.length-1
// console.log(`the second biggest 4-digit number is: ${chalk.blue(fourDigit[fave])}`);

//axios get ---------------------------------------------------------
// axios.get ('https://jsonplaceholder.typicode.com/users')
// .then ((res) => {console.log(res.data)
// res.data.map((user) => {
//   printName(user)
// })
// })

/************************************
 **** Practice 1 => to reverse a number
 ************************************/
const item1 = 13209586
console.log(item1, String(item1))
console.log(String(item1).split("").reverse().join(""))

const user = {
  name: "ali",
  phone: "09106670855",
  age: 32,
}

/**************************************
 ******** Object Destructure
 *************************************/

// Old way
// const name = user.name
// const phone = user.phone
// const age = user.name

// Destructure
const { name, phone, age } = user

/**************************************
 ******** Array Destructure
 *************************************/
const persons = ["ali", "rojin", "kim"]

// Old way
// const person1 = persons[0]
// const person2 = persons[1]

// Destructure
const [person1, person2] = persons

/**************************************
 ******** Props Destructure
 *************************************/
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: {
      city: "Gwenborough",
    },
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    address: {
      city: "Wisokyburgh",
    },
    phone: "010-692-6593 x09125",
  },
]

// Old way
// users.map(user => console.log(`Name: ${user.name} and City: ${user.address.city}`))

// Destructure
users.map(({ name, address: { city } }) => {

  // const {name, address: { city }} = user
  console.log(`Name: ${name} and City: ${city}`)
})
