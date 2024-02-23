"use client"

import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
    return (
        <TypeAnimation 
            sequence= {[
                "Jasa Konstruksi No.1",
                1000,
                "Terpercaya dan Berkualitas",
                1000,
                "25 Tahun Pengalaman",
                1000,
            ]}
            repeat= {Infinity}
            preRenderFirstString= {true}
        />
    )
};

export default TextAnimation;