import React, {useState} from 'react';
import jaz05 from '../assets/jaz05.jpg'
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
        if(value.toLowerCase() === "apple"){
            history.push("/video5");
        } else {

        }
    }

    return (<div>
        <MainContainer background={jaz05}>
            <FlexContainer>
                <WelcomeText>LAPTOP?!</WelcomeText>
                <div style={{color: 'white', flex: 1}}>
                    <p>You'll find a clue with tools used to eat.</p>
                    <p>Hurry now, your hunt is almost complete!</p>
                </div>
                <AnswerInput type="text" onSubmit={handleClick}/>
            </FlexContainer>
        </MainContainer>
    </div>)
}

export default Clue3;