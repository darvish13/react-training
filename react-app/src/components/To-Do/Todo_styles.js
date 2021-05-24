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
