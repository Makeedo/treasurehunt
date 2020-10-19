import React, {useState} from 'react';
import jaz08 from '../assets/jaz08.jpg'
import styled from 'styled-components'
import MainContainer from "../components/MainContainer";
import {useHistory} from "react-router-dom";
import AnswerInput from "../components/AnswerInput";

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 20px;
    line-height: 2em;
`

const WelcomeText = styled.h1`
    color: white;
    text-align:center;
`

function Clue3() {

    const history = useHistory();

    function handleClick(value) {
        if(value.toLowerCase() === "josé guillermo abel lópez portillo y pacheco"){
            history.push("/video3");
        } else {

        }
    }

    return (<div>
        <MainContainer background={jaz08}>
            <FlexContainer>
                <WelcomeText>WHERE AM I?</WelcomeText>
                <div style={{color: 'white', flex: 1}}>
                    <p>Whatever you wish, can be seen,</p>
                    <p>In my black, flat screen.</p>
                    <p>Use a remote to get your way,</p>
                    <p>And I’ll follow whatever you say!</p>
                </div>
                <AnswerInput type="text" onSubmit={handleClick}/>
            </FlexContainer>
        </MainContainer>
    </div>)
}

export default Clue3;