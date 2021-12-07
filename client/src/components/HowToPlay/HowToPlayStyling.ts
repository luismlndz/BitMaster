import styled from "styled-components"

export const container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 80vh;
    background-color: #484f58;
    border-radius: 1rem;
    margin-top: -2rem;
    border: 1px solid #21262D;
    overflow: hidden;
`
export const title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #f0f6fc;
    background: url('/assets/howtotitle.png') no-repeat center;
    background-size: contain;
    width: 100%;
    height: 15vh;
    background-color: #484f58;
    border-bottom: 5px solid #21262D;
`

export const howto = styled.div`
    width: 100%;
    height: 100%;
    background: url('/assets/howto.png') no-repeat center;
    background-size: contain;
`