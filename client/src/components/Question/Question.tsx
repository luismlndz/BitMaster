import * as C from './QuestionStyling';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface props {
    addScore(arg: Boolean): void;
    difficulty: string;
}

export const Question = ({addScore, difficulty}: props) => {
    const [question, setQuestion] = useState<null | {id: number, question: string, block: string,options: Array<string>, answer: string}>(null);
    const [isCorrect, setIsCorrect] = useState<null | Boolean>();
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        axios.get(`http://localhost:8080/questions/${difficulty}`)
        .then((response) => {
            setQuestion(response.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [difficulty]);

    const checkAnswer = (option: string) => {
        console.log("clicked");
        if(option === question?.answer) {
            setIsCorrect(true);
            addScore(true);
        }
        else
            setIsCorrect(false);
        
        disableButtons();
    }

    const handleContinue = () => {
        axios.get(`http://localhost:8080/questions/${difficulty}`)
        .then((response) => {
            setQuestion(response.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
        });

        enableButtons();
        setIsCorrect(null);
    }

    const disableButtons = () => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((option) => {
            option.setAttribute('disabled', 'true');
            option.style.cursor = 'auto';
            option.style.backgroundColor = 'white';
            option.style.color = 'black';
        });
    }

    const enableButtons = () => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((option) => {
            option.removeAttribute('disabled');
            option.style.cursor = 'pointer';
        });
    }

    return (
        <C.container>
            {loading ? <C.loading>Loading...</C.loading> : 
                <>
                    <C.question>
                        <h1>{question!.question}</h1>
                    </C.question>
                    <C.block>
                        <p>{question!.block}</p>
                    </C.block>
                    <C.optionsContainer>
                        {question!.options.map((option, index) => (
                            <C.option key={index} onClick={() => {checkAnswer(option)}}>{option}</C.option>
                        ))}
                    </C.optionsContainer>
                    {isCorrect === true ? 
                        <C.nextContainer>
                            <C.correct>Correct!</C.correct>
                            <C.continueButton onClick={handleContinue} >Continue</C.continueButton>
                        </C.nextContainer> 
                    : ((isCorrect === false) ? 
                        <C.nextContainer>
                            <C.incorrect>Incorrect!</C.incorrect> 
                        </C.nextContainer>
                        : '')
                    }
                </>
            }
        </C.container>
    );
}