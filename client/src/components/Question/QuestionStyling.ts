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
    height: 15vh;
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
export const option = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: black;
    width: 40%;
    height: 50px;
    background-color: white;
    border-radius: 1rem;
    margin: 1rem;

    :hover {
        cursor: pointer;
    }

`

export const loading = styled.div`
    color: white;
    font-size: 2rem;
    text-align: center;
    margin: 60% 0rem;
`