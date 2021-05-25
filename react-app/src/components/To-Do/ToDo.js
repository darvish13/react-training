import './ToDo.css'
import React, { useState } from 'react'
import ToDoItems from '../TodoItems/ToDoItems'
import shortid from 'shortid'
import styled from 'styled-components'
import { Body, Test } from './Todo_styles'

const Todo = () => {
  const [UserInput, setUserInput] = useState()
  const [ToDolist, setToDolist] = useState([])
  const [ToDelete, setToDelete] = useState([])
  const [SelectedToDos, setSelectedToDos] = useState([])
  // console.log('these are going to be deleted' + { ToDelete });
  // console.log(SelectedToDos);

  return (
    <>
      <Body>
        <b>To Do List</b>

        <form
          id='input'
          onSubmit={(event) => {
            event.preventDefault()
            let updatedToDolist = ToDolist
            updatedToDolist.push(UserInput)
            setToDolist(updatedToDolist)
            //Now we clear the input field
            setUserInput('')
          }}
        >
          <div>
            {/* <label htmlFor="userInput"> Insert your objective </label> */}
            <input
              id='userInput'
              type='text'
              onChange={(event) => {
                setUserInput(event.target.value)
              }}
              value={UserInput}
            />
            <button className='submitButton' type='submit'>
              Submit
    </button>
          </div>
        </form>

        {ToDolist.map((each, index) => {
          return (
            <ToDoItems
              key={index}
              text={each}
              selectedToDos={SelectedToDos}
              setSelectedToDos={setSelectedToDos}
              id={shortid.generate()}
            />
          )
        })}

    </>
  )
}

export default Todo

