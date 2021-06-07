import './ToDoItems.css'
import { useState } from 'react'
import { Check, Close, DeleteForever, Edit } from '@material-ui/icons'
import styled from 'styled-components'

const ToDoItems = ({
  text,
  setSelectedToDos,
  id,
  selectedToDos,
  toDoList,
  setToDoList,
}) => {
  /**************************************
   ******** State
   *************************************/
  const [IsSelected, setIsSelected] = useState(false)
  const [ToDelete, setToDelete] = useState(false)

  /**************************************
   ******** Cancel Deletion
   *************************************/
  const cancel = () => {
    setToDelete(false)
  }

  /**************************************
   ******** Delete Todo
   *************************************/
  const deleteToDo = () => {
    const UpdatedToDolist = toDoList.filter(
      ({ id: selectedId }) => id != selectedId
    )
    setToDoList(UpdatedToDolist)
  }

  /**************************************
   ******** Handle Click
   *************************************/
  const handleClick = () => {
    setIsSelected(!IsSelected)

    const duplicateTodo = selectedToDos.find(({ id: todoId }) => todoId == id)

    if (duplicateTodo)
      setSelectedToDos(selectedToDos.filter(({ id: todoId }) => todoId != id))

    else setSelectedToDos([...selectedToDos, { id, text }])
  }

  /**************************************
   ******** Render
   *************************************/
  return (
    <div
      style={{
        background: 'lightblue',
        display: 'grid',
        gridTemplateColumns: '5% 1fr 12.5% 12.5%',
        gridGap: '0.5em',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        width: '70em',
        margin: '0.15em auto',
      }}
    >
      <div
        onClick={handleClick}
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'lightgray',
          borderRadius: '10px 0 0 10px',
          cursor: 'pointer',
        }}
      >
        {IsSelected ? <Check /> : <></>}
      </div>

      <div
        onClick={handleClick}
        style={{
          padding: '1em 1.5em',
        }}
      >
        <p>{text}</p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          width: '100%',
          height: '100%',
        }}
      >
        <Edit style={{ color: 'blue', fontSize: '3em' }} />
      </div>

      {ToDelete ? (
        <div style={{ display: 'flex' }}>
          <p>are you sure?</p>
          <Check
            style={{ color: 'green', cursor: 'pointer' }}
            onClick={deleteToDo}
          />

          <Close style={{ color: 'red', cursor: 'pointer' }} onClick={cancel} />
        </div>
      ) : (
        <div
          onClick={() => {
            setToDelete(true)
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            width: '100%',
            height: '100%',
          }}
        >
          <DeleteForever style={{ color: 'red', fontSize: '3em' }} />
        </div>
      )}
    </div>

    /************************************
     **** practice 1
     ************************************/

    // <div className='entryWrapper'>
    //   <label className='checkBoxContainer'>
    //     <input
    //       type='checkbox'
    //       checked='checked'
    //       className='checkbox'
    //       checked={IsSelected}
    //       onClick={() => {
    //         setIsSelected(!IsSelected)

    //         const DuplicateToDo = selectedToDos.find(
    //           ({ id: toDoId }) => id == toDoId
    //         )
    //         console.log('*********:', DuplicateToDo)

    //         setSelectedToDos([...selectedToDos, { id, text }])
    //       }}
    //     />
    //     <span className='checkmark'></span>
    //   </label>

    //   <div className='toDoEntry'>
    //     <p>{text}</p>
    //   </div>

    //   <div className='buttonsContainer'>
    //     <button
    //       type='button'
    //       id='editButton'
    //       // onClick={
    //       //     (div) => {
    //       //         let toBeDeletedItems = setToDelete
    //       //         setToDelete(div)
    //       //         toBeDeletedItems.push(ToDelete)
    //       //     }
    //       // }
    //     >
    //       edit
    //     </button>
    //     <button
    //       type='button'
    //       id='deleteButton'
    //       // onClick={
    //       //     (div) => {
    //       //         let toBeDeletedItems = setToDelete
    //       //         setToDelete(div)
    //       //         toBeDeletedItems.push(ToDelete)
    //       //     }
    //       // }
    //     >
    //       delete
    //     </button>
    //   </div>
    // </div>
  )
}

export default ToDoItems
