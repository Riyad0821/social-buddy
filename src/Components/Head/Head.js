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
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <h1>Social Buddy</h1>
            </BottomNavigation>
        </div>
    );
};

export default Head;