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

export const startMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const startButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: black;
  width: 40%;
  height: 50px;
  background-color: white;
  border: none;
  border-radius: 1rem;
  margin: 1rem;

  :hover {
    cursor: pointer;
    background-color: #1F6FEB;
    transition: 0.5s;
    color: white;
  }
`

export const map = styled.div<{difficulty: string}>`
  width: 770px;
  height: 510px;
  border-radius: 1rem;
  background-image: url('/assets/${props => props.difficulty}.png');
  //background-color: #484f58;
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

export const gameOver = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const playAgain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: black;
  width: 40%;
  height: 50px;
  background-color: white;
  border: none;
  border-radius: 1rem;
  margin: 1rem;

  :hover {
    cursor: pointer;
    background-color: #1F6FEB;
    transition: 0.5s;
    color: white;
  }
`

export const leaderboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 80vh;
    background-color: #484f58;
    border-radius: 1rem;
    border: 1px solid #21262D;
    overflow: hidden;
`
