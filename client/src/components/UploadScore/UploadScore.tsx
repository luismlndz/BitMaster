import * as C from './UploadScoreStyling';
import axios from 'axios';
import React, { useState } from 'react';

type props = {
    score: number
}

export const UploadScore = ({ score }: props) => {
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
                    <button onClick={() => {window.location.reload()}}>Play Again</button>
                </>
                :
                <>
                    <form onSubmit={handleSubmit}>
                        <h1>{`Your score: ${score}`}</h1>
                        <h1>Enter your username</h1>
                        <input name='username' placeholder='Username'/>
                        <button type='submit'>Submit</button>
                    </form>
                    <button onClick={() => {window.location.reload()}}>Cancel and Play Again</button>
                </>

            }
        </C.container>
    );
}