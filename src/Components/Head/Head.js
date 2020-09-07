import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';


const useStyles = makeStyles({
    root: {
        marginBottom: 30,
        backgroundColor: 'gray',
        color: 'blue'

    },
});

const Head = () => {
    const classes = useStyles();
    return (
        <div>
            <BottomNavigation className={classes.root}
            >
                <h1>Social Buddy</h1>
            </BottomNavigation>
        </div>
    );
};

export default Head;