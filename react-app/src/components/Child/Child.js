import './Child.css'
import UserImage from '../../images/MOHAMMAD photo.jpg'

/************************************
 **** the first practice
 ************************************/
// const Child =
//     () => {
//         return (
//             <div id='card'>
//                 <img id='photo' src={UserImage} alt="Sydney Opera Hall" />
//                 <div id='nameContainer'>
//                     <h1 id='name'>Mohammad Tabatabaie</h1>
//                 </div>
//                 <span id='firstItem'>username: mmatt93</span>
//                 <span>email: m.taba1508@gmail.com</span>
//                 <span>city: Tehran</span>
//             </div>
//         )
//     }

// export default Child


/************************************
 **** the second practice
 ************************************/
const Child =
    ({ name, username, email, city }) => {
        return (
            <div id='card'>
                <img id='photo' src={UserImage} alt="Sydney Opera Hall" />
                <div id='nameContainer'>
                    <h1 id='name'>{name}</h1>
                </div>
                <span id='firstItem'><b>username:</b> {username}</span>
                <span><b>email:</b> {email}</span>
                <span><b>city:</b> {city}</span>
            </div>
        )
    }

export default Child

// const UserCard = 
// ({images, names, families, emails, cities}) => {


//     const [Image, setImage] = useState(0)
//     const [Name, setName] = useState(0)
//     const [Family, setFamily] = useState(0)
//     const [Email, setEmail] = useState(0)
//     const [City, setCity] = useState(0)

//     const receivedData = ''


//     axios.get ('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {receivedData})

//     console.log(receivedData);

//     return (
//         <h1>User Card</h1>
//     )
// }