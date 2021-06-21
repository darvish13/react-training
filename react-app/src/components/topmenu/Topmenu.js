import React from 'react'
import { LinkWrapper, Main } from './topmenu_styles'
import { Link } from 'react-router-dom'

const TopMenu = () => {
  return (
    <>
      <Main>
        <LinkWrapper>
          <Link to='/'>Home</Link>
        </LinkWrapper>

        <LinkWrapper>
          <Link to='/sandbox'>Sandbox</Link>
        </LinkWrapper>

        <LinkWrapper>
          <Link to='/قلی'>Todolist</Link>
        </LinkWrapper>

        <LinkWrapper>
          <Link to='/jokes'>Jokes</Link>
        </LinkWrapper>
      </Main>
    </>
  )
}

export default TopMenu
