import styled from "styled-components"

export const container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #21262D;
  width: 100vw;
  height: 100vh;
`

export const mapContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const map = styled.div`
  width: 770px;
  height: 510px;
  border-radius: 1rem;
  // background-image: url('/assets/map.png');
  background-color: #484f58;
  background-position: left top;
  background-size: 100%;
  margin: 1rem;
  margin-right: 1.5rem;
  margin-top: 3rem;
  border: 1px solid #21262D;
`
export const textContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const score = styled.div`
  color: white;
  font-size: 1.5rem;
  margin-left: 2rem;
`
export const difficulty = styled.div`
  color: white;
  font-size: 1.5rem;
  margin-right: 2.5rem;
`