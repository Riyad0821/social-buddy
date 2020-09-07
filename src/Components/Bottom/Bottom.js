import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';


const useStyles = makeStyles({
    root: {
        margin: 20
        
    },
});

const Bottom = () => {
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
                <h5>© All Rights Reserved To Social Buddy.</h5>

            </BottomNavigation>
        </div>
    );
};

export default Bottom;