import './ToDoEntry.css'
import { useState } from 'react'



const ToDoEntry = ({ text, setSelectedToDos, id, selectedToDos }) => {

    const [IsSelected, setIsSelected] = useState(false)

    return (
        <div className='entryWrapper'>

            <label className="checkBoxContainer">
                <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                    checked={IsSelected}
                    onClick={() => {
                        setIsSelected(!IsSelected)


                        const DuplicateToDo = selectedToDos.find(({ id: toDoId }) => id == toDoId)
                        console.log('*********:', DuplicateToDo);

                        setSelectedToDos([...selectedToDos, { id, text }])

                    }} />
                <span className="checkmark"></span>
            </label>

            <div className='toDoEntry'>
                <p>
                    {text}
                </p>
            </div>

            <div className='buttonsContainer'>
                <button
                    type='button'
                    id='editButton'
                // onClick={
                //     (div) => {
                //         let toBeDeletedItems = setToDelete
                //         setToDelete(div)
                //         toBeDeletedItems.push(ToDelete)
                //     }
                // }
                >
                    edit
                </button>
                <button
                    type='button'
                    id='deleteButton'
                // onClick={
                //     (div) => {
                //         let toBeDeletedItems = setToDelete
                //         setToDelete(div)
                //         toBeDeletedItems.push(ToDelete)
                //     }
                // }
                >
                    delete
                </button>
            </div>
        </div>
    )
}

export default ToDoEntry

