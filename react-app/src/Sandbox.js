import { useState } from 'react'
import axios from 'axios'

const Sandbox = () => {
  const [Joke, setJoke] = useState()

  axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    // name = res.data[0].name
    setJoke(res.data[0].name)
  })

  return (
    <>
      <h1>Sandbox</h1>
      <span>Name: {Joke}</span>

      <JokeContainer>
        <JokeText />
      </JokeContainer>
    </>
  )
}

export default Sandbox

const JokeContainer = (props) => {
  return <div>{props.children}</div>
}

const JokeText = (props) => <h1>Joke: ${props.joke}</h1>
