import './ToDo.css'
import React, { useState, useEffect } from 'react'
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
  console.log(SelectedToDos);

  /*******************************************************
   ******** I wrote it in useEffect to only run it once
   *******************************************************/
  useEffect(() => {
    const answers = [
      {
        id: 1,
        text: 'felan',
      },
      {
        id: 2,
        text: 'felan_2',
      },
      {
        id: 3,
        text: 'felan_3',
      },
      {
        id: 4,
        text: 'felan_4',
      },
    ]

    const resultOfMap = answers.map((answer) => {
      // Do something ...
      return `This is one of the answers: ${answer.text}`
    })

    const resultOfFilter = answers.filter(({ id }) => id > 5)

    const resultOfFind = answers.find(({ id }) => id == 13)

    console.log('result of map:', resultOfMap)
    console.log({ resultOfFilter })
    console.log(resultOfFind)
  }, [])

  return (
    <>
      <Body>
        <b>To Do List</b>

        <form
          id='input'
          onSubmit={(event) => {
            event.preventDefault()
            let updatedToDolist = ToDolist
            updatedToDolist.push({id:shortid.generate(), text:UserInput})
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

        {ToDolist.map(({text, id}) => {
          return (
            <ToDoItems
              key={id}
              text={text}
              selectedToDos = {SelectedToDos}
              setSelectedToDos = {setSelectedToDos}
              toDoList = {ToDolist}
              setToDoList = {setToDolist}
              id={id}
            />
          )
        })}
      </Body>
    </>
  )
}

export default Todo
