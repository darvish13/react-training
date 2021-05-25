import './ToDoItems.css'
import { useState } from 'react'
import { Check, DeleteForever, Edit } from '@material-ui/icons'
import styled from 'styled-components' 

const ToDoItems = ({ text, setSelectedToDos, id, selectedToDos }) => {
  const [IsSelected, setIsSelected] = useState(false)

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
        onClick={() => setIsSelected(!IsSelected)}
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
        onClick={() => setIsSelected(!IsSelected)}
        style={{
          padding: '1em 1.5em',
        }}
      >
        <p>
          Esse dolore aliqua tempor occaecat id nostrud quis anim nisi do.
          Cupidatat proident{' '}
          <i style={{ backgroundColor: 'orange' }}>officia</i> nulla laborum qui
          pariatur enim deserunt aute aliqua ad. Nostrud do aliquip adipisicing
          proident. Velit aliqua aliquip consequat et Lorem. Culpa ut amet do
          aliquip et irure. Duis Lorem qui labore aute nulla Lorem consectetur
          ullamco anim fugiat anim. Pariatur sit tempor incididunt consectetur
          irure occaecat commodo sit consequat nulla laborum.
        </p>
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
        <DeleteForever style={{ color: 'red', fontSize: '3em' }} />
      </div>
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
