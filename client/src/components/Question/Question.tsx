import * as C from './QuestionStyling';
import data from '../../data/questions.json';
import { useEffect, useState } from 'react';

interface props {
    addScore(arg: Boolean): void;
}

export const Question = ({addScore}: props) => {
    const [question, setQuestion] = useState<null | {id: number, question: string, block: string,options: Array<string>, answer: string}>(null);
    const [isCorrect, setIsCorrect] = useState<Boolean>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setQuestion(data[0]);
        setLoading(false);
    }, []);

    const checkAnswer = (option: string) => {
        if(option === question?.answer) {
            setIsCorrect(true);
            addScore(true);
        }
        else
            setIsCorrect(false);
        
        disableButtons();
    }

    const disableButtons = () => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((option) => {
            option.setAttribute('disabled', 'true');
            option.style.cursor = 'auto';
        })
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
                            <C.option key={index} onClick={() => {checkAnswer(option)}} >{option}</C.option>
                        ))}
                    </C.optionsContainer>
                    {isCorrect ? <C.correct>Correct!</C.correct> : ((isCorrect === false) ? <C.incorrect>Incorrect!</C.incorrect> : '')}
                </>
            }
        </C.container>
    );
}