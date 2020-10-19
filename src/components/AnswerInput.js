import React, {useState} from 'react';
import styled from 'styled-components'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";
import SendIcon from '@material-ui/icons/Send';
import InputBase from "@material-ui/core/InputBase";

const Container = styled.div`
    width: 100%;
    display:flex;
`

const useStyles = makeStyles(theme => ({
    input: {
        background: theme.whiteWithOpacity,
        minHeight: "3rem",
        textAlign: 'center',
        textTransform: "uppercase",
        fontSize: '1.3rem',
        color: 'currentColor!important',
        '&:focus': {
            background: theme.whiteWithOpacity,
            color: 'currentColor!important',
        },
        marginRight: '10px'
    },
}));


function AnswerInput({type, onChange, onSubmit}) {

    const [value, setValue] = useState("");

    const classes = useStyles();
    const {input} = classes;

    function onInputChange(event) {
        const value = event.target.value;
        console.log("onInputChange: "+value);
        setValue(value);
        if(onChange){
            onChange(value);
        }
    }

    function buttonClicked() {
        onSubmit(value);
    }

    return (
        <Container>
            <InputBase
                id="location"
                label="answer"
                placeholder="answer here"
                value={value}
                onChange={onInputChange}
                classes={{input}}
                fullWidth={true}
                type={type}
            />
            <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                onClick={buttonClicked}
            >
                Send
            </Button>
        </Container>
    )
}

export default AnswerInput;