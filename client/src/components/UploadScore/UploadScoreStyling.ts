import styled from "styled-components"

export const container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 770px;
    height: 510px;
    border-radius: 1rem;
    background-image: url('/assets/background.gif');
    background-color: #484f58;
    background-position: left top;
    background-size: 100%;
    margin: 1rem;
    margin-right: 1.5rem;
    margin-top: -2rem;
    border: 1px solid #21262D;
`

export const text = styled.div`
    text-align: center;
`

export const form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const input = styled.input`
    width: 15vw;
    height: 2rem;
    border: 1px solid black;
    border-radius: 1rem;
    text-align: center;
    margin-bottom: 0.5rem;
`

export const button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: white;
    width: 15vw;
    height: 50px;
    background-color: #21262D;
    border: none;
    border-radius: 1rem;
    margin: 0.5rem;

    :hover {
    cursor: pointer;
    background-color: #1F6FEB;
    transition: 0.5s;
    color: white;
    }
`