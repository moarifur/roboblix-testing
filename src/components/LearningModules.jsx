import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LearningModules = () => {

    useEffect(()=>{
        AOS.init({duration: 1500});
    })

    return (
        <>
            <div data-aos="zoom-in">What</div>
            <div data-aos="zoom-in-up">Up</div>
        </>
    );
};

export default LearningModules;