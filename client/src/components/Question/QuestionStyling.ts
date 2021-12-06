import styled from 'styled-components';

export const container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 80vh;
    background-color: #484f58;
    border-radius: 1rem;
    border: 1px solid #21262D;
    overflow: hidden;
`
export const question = styled.div`
    font-size: 1rem;
    color: #f0f6fc;
    text-align: center;
    padding-bottom: 1rem;
    width: 100%;
    height: 15vh;
    background-color: #484f58;
    border-bottom: 5px solid #21262D;
`

export const block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-self: center;
    font-size: 1rem;
    color: #f0f6fc;
    width: 90%;
    background-color: #21262D;
    border-radius: 1rem;
    margin-top: 2rem;
`
export const optionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-self: center;
    color: #f0f6fc;
    width: 90%;
    height: 25vh;
    background-color: #21262D;
    border-radius: 1rem;
    margin: 1rem 0rem;
`
export const option = styled.button`
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

export const loading = styled.div`
    color: white;
    font-size: 2rem;
    text-align: center;
    margin: 60% 0rem;
`
export const nextContainer = styled.div`
    align-self: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #21262D;
    border-radius: 1rem;
    margin-top: 1rem;
    width: 90%;
    height: 50px;
`

export const correct = styled.div`
    color: limegreen;
    text-align: center;
    font-size: 2rem;
`
export const incorrect = styled.div`
    color: red;
    text-align: center;
    font-size: 2rem;
`
export const continueButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: white;
    width: 35%;
    height: 50%;
    border-radius: 1rem;

    :hover {
        cursor: pointer;
        background-color: #1F6FEB;
        transition: 0.5s;
        color: white;
    }
`