import './ToDo.css'
import React, { useState } from 'react'

const Row = () => {
    
}



const Todo = () => {

    const [UserInput, setUserInput] = useState()
    const [ToDolist, setToDolist] = useState([])
    const [ToDelete, setToDelete] = useState([])
    console.log('these are going to be deleted' + { ToDelete });

    return (
        <>
            <div id='body'>
                <b>To Do List</b>

                <form id='input' onSubmit={(event) => {
                    event.preventDefault()
                    let updatedToDolist = ToDolist
                    updatedToDolist.push(UserInput)
                    setToDolist(updatedToDolist)
                    //Now we clear the input field
                    setUserInput('')
                }}>
                    <div>
                        {/* <label htmlFor="userInput"> Insert your objective </label> */}
                        <input
                            id='userInput'
                            type="text"
                            onChange={(event) => { setUserInput(event.target.value); }}
                            value={UserInput}
                        />
                        <button type='submit'>Submit your ToDo</button>
                    </div>
                </form>

                {ToDolist.map((each) => {

                    return (
                        <div>
                            <p id='todo'>
                                {each}
                            </p>
                            <button type='button' onClick={(div) => {
                                let toBeDeletedItems = setToDelete
                                setToDelete(div)
                                toBeDeletedItems.push(ToDelete)
                            }}>
                                delete
                            </button>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Todo



