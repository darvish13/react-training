import './header.css'

function Header(props) {
  console.log('*** Header Props:', props)

  return (
    <div className='header'>
      <h1 className='title'>{props.title}</h1>
    </div>
  )
}

export default Header
