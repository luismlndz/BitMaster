import styled from "styled-components"

export const map = styled.div<{difficulty: string}>`
  width: 770px;
  height: 510px;
  border-radius: 1rem;
  background-image: url('/assets/${props => props.difficulty}.gif');
  background-position: left top;
  background-size: 100%;
  margin: 1rem;
  margin-right: 1.5rem;
  margin-top: -2rem;
  border: 1px solid #21262D;
`