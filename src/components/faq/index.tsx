"use client"

import { useState } from "react";
import Section from "../section";
import Image from "next/image";
import up from "@/assets/images/up.svg";
import down from "@/assets/images/down.svg";

const options = [
    {question: "Sample Question", answer: "Sample Answer"},
    {question: "Sample Question", answer: "Sample Answer"},
    {question: "Sample Question", answer: "Sample Answer"},
    {question: "Sample Question", answer: "Sample Answer"},
    {question: "Sample Question", answer: "Sample Answer"},
];

interface Props {
    question: string,
    answer: string,
}

const Box = ({question, answer}: Props) => {
    const [ hidden, setHidden ] = useState(true);
    const onClick = () => {
        setHidden(!hidden)
    };
    return (
        <div className={`flex flex-col gap-2 border-2 ${hidden ? "border-stone-900" : "border-yellow-500"} hover:border-yellow-500`}>
            <div className="bg-yellow-500 p-1 flex flex-row justify-between w-full font-bold">
                <div>
                    {question}
                </div>
                <div className="cursor-pointer" onClick={onClick}>
                    {hidden ? 
                        <Image 
                            src={down}
                            alt="Down Arrow"
                            width={32}
                            height={32}
                        />
                    :
                        <Image 
                            src={up}
                            alt="Up Arrow"
                            width={32}
                            height={32}
                        />
                    }
                </div>
            </div>
            <div className={`p-1 ${hidden ? "hidden" : "block"}`}>
                {answer}
            </div>
        </div>
    )
};

const FAQ = () => {
    return (
        <Section>
            <div className="flex flex-col gap-2 my-5 mx-3">
                {options.map((option, i) => 
                    <Box key={i} question={option.question} answer={option.answer}/>
                )}
            </div>
        </Section>
    )
};

export default FAQ;