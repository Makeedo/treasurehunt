import React, {useState} from 'react';
import jaz05 from '../assets/jaz08.jpg'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import MainContainer from "../components/MainContainer";
import {useHistory} from "react-router-dom";

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

function Video({title, url, nextPath, children}) {

    const history = useHistory();

    function goToNextClue() {
        if (nextPath) {
            window.setTimeout(() => {
                history.push(nextPath);
            }, 1000)
        }


    }

    return (
        <MainContainer background={jaz05} backgroundPositionX="right">
            <FlexContainer>
                <WelcomeText>{title}</WelcomeText>
                <div style={{color: 'white'}}>
                    {children}
                </div>
                <ReactPlayer
                    url={url}
                    width='100%'
                    height='100%'
                    onEnded={goToNextClue}
                    controls={false}
                />
            </FlexContainer>
        </MainContainer>)
}

export default Video;