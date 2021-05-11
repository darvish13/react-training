const prettyPrint = input => 
  console.log(input)


  const selectedParagaph = document.querySelector("#text")
  selectedParagaph.innerHTML = `\n Yesterday, I was thinking about the meaning of friendship,
  then I prepare a list containing data about all of my friends.
  Now, I would like to introduce one of them who is in the <b style="color: #5BC236">${input[5].id}</b>th place of my friends' list.
  She is our mutual friend, but I do not want to introduce her directly. So, I give hints to guess who she is.
  her first name starts with <b style="color: #5BC236">"${input[5].name[5]}"</b>,
  but you could probably not find out who she is, in that we usually call her as the family name which starts with <b style="color: #5BC236">"${input[5].name[12]}"</b>.
  As I remember, the first time that you sent her an email, she did not respond.
  And you told me that the email address must be wrong because it is not similar to her name at all.
  Never can I forget the eccentric email address which was <b style="color: #5BC236">"${input[5].email}"</b>
  You decided to send her a gift via her zipcode, I also remembered the zipcode that was <b style="color: #5BC236">"${input[5].address.zipcode}"</b>
  Yet again, she did not respond too. Afterwards, you arranged an appointment with <b style="color: #5BC236">"${input[6].name}"</b> at a cafe located in <b style="color: #5BC236">"${input[8].address.street}"</b> in order to consult with him about the problem.
  I think NOW you find out the my <b style="color: #5BC236">${input[5].id}</b>th friend in the list is <b style="color: #5BC236">"${input[5].name}"</b>. `
}

const printToHtml = (input) => {
  const divToFill = document.querySelector("#api_data")
  divToFill.innerHTML = input
}

//Mohammad's algorithm
// const ChuckNorisJoke = document.querySelector("#text")
// ChuckNorisJoke.innerHTML = ""