import React, {useEffect, useState} from 'react';

const AnimatedText = () => {

    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Train Your Child With Future Robotics."
    )
    const [index, setIndex] = useState(0)

    const heroSubtext = `
    mt-0 h-[200px] w-[400px]
    lg:text-[60px] sm:text-[60px] xs:text-[40px] text-[40px] lg:leading-[70px]
    `

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 150)


        }
    }, [index])

    return <h2 className={`animated-text ${heroSubtext}`}>{text}</h2>
};

export default AnimatedText;