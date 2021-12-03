import styled from "styled-components";

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

export const title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #f0f6fc;
    padding-bottom: 1rem;
    width: 100%;
    height: 15vh;
    background-color: #484f58;
    border-bottom: 5px solid #21262D;
    margin-bottom: 2rem;
`

export const header = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    width: 90%;
    background-color: #21262D;
`

export const headerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1rem;
    width: 50%;
    height: 40px;
    border-bottom: 1px solid #484f58;
`

export const row = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    width: 90%;
    height: 20px;
    background-color: white;
`

export const rowData = styled.div`
    display: flex;
    justify-content: center;
    color: black;
    font-size: 1rem;
    width: 50%;
    border-bottom: 1px solid #484f58;
`