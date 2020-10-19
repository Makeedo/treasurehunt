import React, {useState} from 'react';
import jaz01 from '../assets/jaz01.png'
import bdCake from '../assets/bd_cake.svg'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import YouTube from "@u-wave/react-youtube";
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

function Clue1() {

    const history = useHistory();

    function handleClick(value) {
        if(value === "0"){
            history.push("/video1");
        } else {

        }
    }

    return (<div>
        <MainContainer background={jaz01} backgroundPositionX="right">
            <FlexContainer>
                <WelcomeText>WHERE AM I?</WelcomeText>
                <div style={{color: 'white', flex: 1}}>
                    <p>Off to the room where work is done,</p>
                    <p>but there one can have some quiet and fun.</p>
                    <p>Perhaps on the surface you’ll find me here.</p>
                    <p>Books, papers and a lamp is near.</p>
                </div>
                <AnswerInput type="number" onSubmit={handleClick}/>
            </FlexContainer>
        </MainContainer>
    </div>)
}

export default Clue1;