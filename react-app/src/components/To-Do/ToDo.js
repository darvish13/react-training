import './ToDo.css'
import React, { useState, useEffect } from 'react'
import ToDoItems from '../TodoItems/ToDoItems'
import shortid from 'shortid'
import styled from 'styled-components'
import { Body, DeleteAll } from './Todo_styles'
import { Delete } from '@material-ui/icons'

const Todo = () => {
  const [UserInput, setUserInput] = useState()
  const [ToDolist, setToDolist] = useState(
    JSON.parse(localStorage.getItem('localTodos')) || []
  )
  const [SelectedToDos, setSelectedToDos] = useState([])

  // useEffect(() => {
  //   localStorage.setItem('test object', JSON.stringify({ name: 'علیرضا' }))

  //   console.log(JSON.parse(localStorage.getItem('test object')))
  // }, [])

  return (
    <>
      <Body>
        <b>To Do List</b>

        <form
          id='input'
          onSubmit={(event) => {
            event.preventDefault()

            if (UserInput) {
              let updatedToDolist = ToDolist
              updatedToDolist.push({ id: shortid.generate(), text: UserInput })
              setToDolist(updatedToDolist)
              //Now we clear the input field
              setUserInput('')
            }
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

        {ToDolist.map(({ text, id }) => {
          return (
            <ToDoItems
              key={id}
              text={text}
              selectedToDos={SelectedToDos}
              setSelectedToDos={setSelectedToDos}
              toDoList={ToDolist}
              setToDoList={setToDolist}
              id={id}
            />
          )
        })}

        <DeleteAll
          selectedTodos={SelectedToDos}
          onClick={() => {
            /**
             * find todos that are not in selected todos array
             */
            const updatedList = ToDolist.filter((todo) => {
              const { id } = todo

              const idsToDelete = SelectedToDos.map(({ id }) => id)

              if (!idsToDelete.includes(id)) return todo
            })

            // update todo list
            setToDolist(updatedList)

            // clear selected todos
            setSelectedToDos([])
          }}
        >
          <Delete style={{ color: 'white' }} />
          <small>Delete All</small>
        </DeleteAll>
      </Body>
    </>
  )
}

export default Todo
