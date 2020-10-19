import React, {useState} from 'react';
import jaz05 from '../assets/jaz06.jpg'
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

function Clue6() {

    const history = useHistory();

    function handleClick(value) {
        history.push("/end");
    }

    return (<div>
        <MainContainer background={jaz05}>
            <FlexContainer>
                <WelcomeText>LAPTOP?! APPLE?!</WelcomeText>
                <div style={{color: 'white', flex: 1}}>
                    <p>Two words that mean a lot</p>
                    <p>Use them and search for the next clue: 'jaz 40'</p>
                </div>
                <AnswerInput type="text" onSubmit={handleClick}/>
            </FlexContainer>
        </MainContainer>
    </div>)
}

export default Clue6;