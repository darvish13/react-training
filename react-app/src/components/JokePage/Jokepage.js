import axios from 'axios'
import './Jokepage.css'
import { useState, useEffect } from 'react'

const Jokepage = ({ jokes }) => {

    /************************************
     **** State
     ************************************/
    const [Counter, setCounter] = useState(0)
    const [Joke, setJoke] = useState(0)

    /************************************
     **** OnMount_only runs once
     ************************************/
    useEffect(() => {getAJoke()}, [])
    console.log(`***********: ${Joke}`);

    /************************************
     **** getAJoke
     ************************************/
     const getAJoke = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(({ data: { value } }) => { setJoke(value) })
            }

    /************************************
     **** decrease numbers
     ************************************/
    const decreaseCounter = () => setCounter(Counter - 1)


    /************************************
     **** Render
     ************************************/
    return (
        <div id='whole'>
            <button onClick={() => setCounter(Counter + 1)}>increase</button>
            <b>Counter: {Counter}</b>
            <button onClick={decreaseCounter}>decrease</button>
            <h1>the Joke of the Day</h1>
            <div id='jokebox'>
                {/* {jokes.map((joke) => <p id='joke'> {joke}</p>)} */}
                {Joke}
            </div>
            <button onClick={getAJoke} >New Joke</button>

        </div>
    )
}


export default Jokepage