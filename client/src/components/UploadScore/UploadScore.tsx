import * as C from './UploadScoreStyling';
import axios from 'axios';
import React, { useState } from 'react';

type props = {
    score: number,
    updateLeaderboard(): void;
}

export const UploadScore = ({ score, updateLeaderboard }: props) => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        
        const target = event.target as typeof event.target & {
            username: { value: string}
        }

        const newEntry = {
            username: target.username.value,
            score : score
        }

        axios.post('http://localhost:8080/leaderboard', newEntry)
        .then((response) => {
            console.log(response);
            updateLeaderboard();
        })
        .catch((err) => {
            console.log(err);
        })

        setSubmitted(true);
    }

    return (
        <C.container>
            { submitted ?
                <> 
                    <h1>Submitted!</h1>
                    <C.button onClick={() => {window.location.reload()}}>Play Again</C.button>
                </>
                :
                <>
                    <C.text><h1>{`Your score: ${score}`}</h1></C.text>
                    <C.text><h1>Enter your username</h1></C.text>
                    <C.form onSubmit={handleSubmit}>
                        <C.input name='username' placeholder='Username'/>
                        <C.button type='submit'>Submit</C.button>
                    </C.form>
                    <C.button onClick={() => {window.location.reload()}}>Cancel and Play Again</C.button>
                </>

            }
        </C.container>
    );
}