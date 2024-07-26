import React, { useRef, useState } from 'react'
import { data } from '../assets/data'

const Quiz = () => {

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState(data[index]);
    const [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    const option_1 = useRef(null)
    const option_2 = useRef(null)
    const option_3 = useRef(null)
    const option_4 = useRef(null)

    const optionArray = [option_1, option_2, option_3, option_4];

    const handelAnswers = (e, ans) => {
        if (lock === false) {
            if (questions.ans === ans) {
                e.target.classList.add('correct');
                setLock(true);
                const NewScore = score + 1;
                setScore(NewScore);
            } else {
                e.target.classList.add('wrong');
                setLock(true);
                optionArray[questions.ans - 1].current.classList.add('correct');
            }
        }
    }

    const nextQuestion = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
            }
            const newIndex = index + 1;
            setIndex(newIndex);
            setQuestions(data[newIndex]);
            setLock(false);

            // Remove classes for the next question
            optionArray.forEach(option => {
                if (option.current) {
                    option.current.classList.remove('correct', 'wrong');
                }
            });
        }
    }

    const resetFun = () => {
        setIndex(0)
        setQuestions(data[0]);
        setScore(0)
        setLock(false);
        setResult(false)
    }

    return (
        <div className='container flex flex-col gap-5 bg-slate-50 p-5 rounded-md text-title md:w-640 mt-top'>
            {result ?
                (<>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl font-bold'>Quiz App</h1>
                    </div>
                    <hr className='h-1 border-none bg-hr' />
                    <h1>The Score Is {score} from {data.length}</h1>
                    <button onClick={resetFun} className='bg-next text-white py-2 rounded-md px-8 w-fit mx-auto'>Reset</button>
                </>

                )

                :
                <>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-xl font-bold'>Quiz App</h1>
                        <span>Count: {data.length}</span>
                    </div>
                    <hr className='h-1 border-none bg-hr' />
                    <h1 className='text-xl'>{index + 1}. {questions.question}</h1>
                    <ul className='flex flex-col gap-5 my-3'>
                        <li ref={option_1} onClick={(e) => handelAnswers(e, 1)} className={`text-center py-2  rounded-md cursor-pointer text-lg border border-border`}>{questions.option1}</li>
                        <li ref={option_2} onClick={(e) => handelAnswers(e, 2)} className={`text-center py-2  rounded-md cursor-pointer text-lg border border-border`}>{questions.option2}</li>
                        <li ref={option_3} onClick={(e) => handelAnswers(e, 3)} className={`text-center py-2  rounded-md cursor-pointer text-lg border border-border`}>{questions.option3}</li>
                        <li ref={option_4} onClick={(e) => handelAnswers(e, 4)} className={`text-center py-2  rounded-md cursor-pointer text-lg border border-border`}>{questions.option4}</li>
                    </ul>
                    <button onClick={nextQuestion} className='bg-next text-white py-2 rounded-md px-8 w-fit mx-auto'>Next</button>
                    <div className='text-right'>{index + 1} Of {data.length} Questions</div>
                </>
            }
        </div>
    )
}

export default Quiz