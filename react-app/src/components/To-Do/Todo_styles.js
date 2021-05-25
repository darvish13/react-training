import styled from 'styled-components'

export const TheRedDiv = styled.div`
  width: 10em;
  height: 5em;
  background-color: ${({ isSelected }) => (isSelected ? 'blue' : 'red')};
  border-radius: 10px;
  transition: all ease-in 0.1s;
  cursor: pointer;

  &:hover {
    background-color: green;
  }

  @media (max-width: 500px) {
    background-color: purple;
  }
`

export const TheGreenCircle = styled.div`
width: 10em;
height: 10em;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
background-color: #006100;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70em;
    margin: auto;
`

export const Test = styled.div`
    display: flex;

    span {
      color: bisque;
      font-size: 4em;
    }

    b {
      background-color: transparent;
      color: orange;
      font-size: 2em;
    }

`