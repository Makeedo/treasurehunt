import React, {useState} from 'react';
import jaz03 from '../assets/jaz03.jpg'
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

function Clue2() {

    const history = useHistory();

    function handleClick(value) {
        if(value.toLowerCase() === "jazmin"){
            history.push("/video2");
        } else {

        }
    }

    return (<div>
        <MainContainer background={jaz03}>
            <FlexContainer>
                <WelcomeText>WHERE AM I?</WelcomeText>
                <div style={{color: 'white', flex: 1}}>
                    <p>I have keys but I can’t open a door,</p>
                    <p>I’m black and white, nothing more.</p>
                    <p>I make music that sounds divine,</p>
                    <p>Near me, your next clue you shall find.</p>
                </div>
                <AnswerInput type="text" onSubmit={handleClick}/>
            </FlexContainer>
        </MainContainer>
    </div>)
}

export default Clue2;