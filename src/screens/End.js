import React from 'react';
import jaz01 from '../assets/jaz01.png'
import bdCake from '../assets/bd_cake.svg'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import YouTube from "@u-wave/react-youtube";
import MainContainer from "../components/MainContainer";
import { useHistory } from "react-router-dom";

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
`

const WelcomeText = styled.h1`
    color: black;
    text-align:center;
`

function End() {

    const history = useHistory();

    function handleClick() {
        window.location.replace("https://www.youtube.com/playlist?list=PLO8LfQB7sZIhE7kt7qD4hopl3c7fV0Dxf");
    }

    return (<div>
        <MainContainer>
            <FlexContainer>
                <WelcomeText>HAPPY BIRTHDAY!</WelcomeText>
                <div>
                    <p>We hope you have lots of fun with your new toy and we wish
                        you all the best for the next 40 years in your life ;D</p>
                    <p>click the cake and you will have another little surprise :)</p>
                </div>
                <img src={bdCake} alt="bday" style={{width: '90%', cursor: 'pointer'}} onClick={handleClick}/>
            </FlexContainer>
        </MainContainer>
    </div>)
}

export default End;