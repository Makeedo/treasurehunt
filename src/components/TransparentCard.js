import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Card} from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    card: {
        background: theme.whiteWithMuchOpacity,
        borderRadius: 0,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width:'100%',
        padding: theme.spacing(2),
    }

}));

const TransparentCard = ({children, className, onClick}) => {

    const classes = useStyles();

        return (
            <Card elevation={0} className={classes.card+" "+className} onClick={onClick}>
                {children}
            </Card>
        );


};

export default (TransparentCard);
