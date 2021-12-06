import * as C from './QuestionStyling';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Guide } from '../Guide/Guide';
import { CodeBlock, dracula } from 'react-code-blocks';


interface props {
    addScore(arg: boolean): void;
    difficulty: string;
    language: string;
    trigger: boolean;
}

export const Question = ({addScore, difficulty, language, trigger}: props) => {
    const [question, setQuestion] = useState<null | {id: number, question: string, block: string,options: Array<string>, answer: string}>(null);
    const [isCorrect, setIsCorrect] = useState<null | boolean>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(trigger) {
            axios.get(`http://localhost:8080/questions/${language}/${difficulty}`)
            .then((response) => {
                setQuestion(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, [difficulty, trigger]);

    const checkAnswer = (option: string) => {
        if(option === question?.answer) {
            setIsCorrect(true);
        }
        else {
            setIsCorrect(false);
            addScore(false);
        }
        
        disableButtons();
    }

    const handleContinue = () => {
        addScore(true);
        
        window.dispatchEvent(new KeyboardEvent('keydown', {
            key: "s",
            keyCode: 83,
            code: "KeyS",
            which: 83
        }));

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
            {trigger ?
                <>
                {loading ? <C.loading>Loading...</C.loading> : 
                    <>
                        <C.question>
                            <h1>{question!.question}</h1>
                        </C.question>
                        <C.block>
                            <CodeBlock
                                language={language}
                                showLineNumbers={true}
                                text={question!.block}
                                theme={dracula}
                            />
                        </C.block>
                        <C.optionsContainer>
                            {question!.options.map((option, index) => (
                                <C.option key={index} onClick={() => {checkAnswer(option)}}>{option}</C.option>
                            ))}
                        </C.optionsContainer>
                        {isCorrect === true ? 
                            <C.nextContainer>
                                <C.correct>Correct!</C.correct>
                                <C.continueButton onClick={handleContinue}>Continue</C.continueButton>
                            </C.nextContainer> 
                        : ((isCorrect === false) ? 
                            <C.nextContainer>
                                <C.incorrect>Incorrect!</C.incorrect> 
                            </C.nextContainer>
                            : null)
                        }
                    </>
                }
                </>
                :
                <Guide/>
            }
        </C.container>
    );
}