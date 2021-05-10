fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    prettyPrint(users)

    let rawHtml = ''

    users.map((user) => {
      const keys = Object.keys(user)

      keys.map(key => rawHtml += `<p style="margin: 0.25em">${key}: <b style="color: #5BC236">${user[key]}</b></p>`)
    })

    printToHtml(rawHtml)
  })

  //salam 