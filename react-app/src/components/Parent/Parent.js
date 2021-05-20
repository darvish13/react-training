/************************************
 **** the first practice
 ************************************/
// import './Parent.css'
// import {useEffect , useState} from 'react'
// import axios from 'axios'
// import Child from '../Child/Child'

// const Parent = ()=>
// {
//     return (
//         <Child/>
//     )
// }

// export default Parent



/************************************
 **** the second practice
 ************************************/
// import './Parent.css'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Child from '../Child/Child'

/************************************
 **** States
 ************************************/
// const [Image, setImage] = useState(0)
// const [Name, setName] = useState(0)
// const [Family, setFamily] = useState(0)
// const [Email, setEmail] = useState(0)
// const [City, setCity] = useState(0)




/************************************
 **** only get once
 ************************************/
// useEffect(() => {
//     return () 
// }, [])


/************************************
 **** main function
 ************************************/
// const Parent = () => {
//     return (
//         <Child name='Mohammad Tabatabaie' username='mmatt93' email='m.taba1508@gmail.com' city='Tehran' />
//     )
// }

// export default Parent



/************************************
 **** the third practice
 ************************************/
import './Parent.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Child from '../Child/Child'


const Parent = () => {

    /************************************
 **** States
 ************************************/
    const [Users, setUsers] = useState([])
    const [Images, setImages] = useState([])
    // const [Name, setName] = useState(0)
    // const [Family, setFamily] = useState(0)
    // const [Email, setEmail] = useState(0)
    // const [City, setCity] = useState(0)


    /************************************
 **** data
 ************************************/
    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => { setUsers(data) })
    }


    /************************************
     **** GetAPicture_wrongWay
     ************************************/
    // const getAPicture = () => {
    //     return (
    //         axios.get('https://picsum.photos/400')
    //             .then(({ data }) => { return data; })
    //     )

    // }


    /************************************
     **** GetPictures_correctWay
     ************************************/

    const getImages = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(

                ({ data: _5000Images }) => {

                    _5000Images.map(
                        ({ url }, counter) => {
                            if (counter < 10) {

                                let currentState = Images
                                currentState.push(url)
                                setImages(currentState)
                            }
                        }
                    )
                }
            )
    }

    console.log(Images);




    /************************************
     **** get once
     ************************************/
    useEffect(() => {
        getUsers()
        getImages()
    }, [])
    console.log('this the array of our users:', Users, Images);




    /************************************
     **** mappi
     ************************************/
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                Users.map((user, index) => {

                    const { name, username, email, address: { city } } = user
                    console.log(index);
                    const image = Images[index]

                    return (
                        <Child
                            name={name}
                            username={username}
                            email={email}
                            city={city}
                            image={image}
                        />
                    )

                })

            }
        </div>


    )
}

export default Parent

