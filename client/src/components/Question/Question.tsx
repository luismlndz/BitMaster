import * as C from './QuestionStyling';
import data from '../../data/questions.json';
import { useEffect, useState } from 'react';

interface questions {
    id: number;
    question: string;
    block: string
    options: Array<string>;
    answers: string;
  }

export const Question = () => {
    const [question, setQuestion] = useState<null | {id: number, question: string, block: string,options: Array<string>, answer: string}>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setQuestion(data[0]);
        setLoading(false);
    }, []);

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
                        {question!.options.map((option) => (
                            <C.option>{option}</C.option>
                        ))}
                    </C.optionsContainer>
                </>
            }
        </C.container>
    );
}