import { useState } from 'react'
import './Dooz.css'


const Cell =
    () => {
        const [IsClicked, setIsClicked] = useState(false)
        const invert = () => setIsClicked(!IsClicked)
        return (

            <div className={`cell ${IsClicked ? 'fill' : ''}`} onClick={invert}>

            </div>
        )
    }


const Grid =
    () => {
        return (
            <>
            <div className='grid'>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
            </>

        )

    }

export default Grid