import styled from "styled-components"

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const hero = styled.div`
    width: 1000px;
    height: 500px;
    background: url('/assets/landinghero.png') no-repeat center;
    background-size: cover;
    margin-top: 5rem;
`

export const button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: white;
  width: 20%;
  height: 50px;
  background-color: #21262D;
  border: none;
  border-radius: 1rem;
  margin-left: 37vw;
  margin-top: 52vh;

  :hover {
    cursor: pointer;
    background-color: #1F6FEB;
    transition: 0.5s;
    color: white;
  }
`

export const tools = styled.div`
  width: 1000px;
  height: 300px;
  background: url('/assets/tools.png') no-repeat center;
  background-size: contain;
  margin: 1rem;
  margin-top: 0rem;
`

export const overview = styled.div`
  width: 1000px;
  height: 690px;
  background: url('/assets/overview.png') no-repeat center;
  background-size: contain;
  margin-top: 1rem;
`

export const overviewGif = styled.div`
  width: 300px;
  height: 200px;
  background: url('/assets/overview.gif') no-repeat center;
  background-size: cover;
  margin-top: 8.5rem;
  margin-left: 14rem;
`

export const dropDownGif = styled.div`
  width: 150px;
  height: 200px;
  background: url('/assets/dropdown.gif') no-repeat center;
  background-size: cover;
  margin-top: 5rem;
  margin-left: 36rem;
`

export const contact = styled.div`
  width: 1000px;
  height: 300px;
  background: url('/assets/contact.png') no-repeat center;
  background-size: contain;
  margin: 1rem;
  margin-top: 0rem;
`
