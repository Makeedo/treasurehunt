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
        if(value.toLowerCase() === "laptop"){
            history.push("/video4");
        } else {

        }
    }

    return (<div>
        <MainContainer background={jaz08}>
            <FlexContainer>
                <WelcomeText>WHERE AM I?</WelcomeText>
                <div style={{color: 'white', flex: 1}}>
                    <p>A swimming pool? Surely not.</p>
                    <p>However, water is all I’ve got.</p>
                    <p>Fill me up and settle down,</p>
                    <p>Relax, and light a candle on!</p>
                </div>
                <AnswerInput type="text" onSubmit={handleClick}/>
            </FlexContainer>
        </MainContainer>
    </div>)
}

export default Clue3;