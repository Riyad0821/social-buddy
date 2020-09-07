import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        marginLeft: 20,
        marginRight: 20
    },
    media: {
        height: 140,
    },
});


const Post = (props) => {
    const classes = useStyles();
    const { id, title, body } = props.post;
    const history = useHistory();
    const handleButton = (postId) => {
        console.log("hello");
        history.push(`/post/${postId}`);
    }
    const postStyle = {
        padding: '10px'
    }

    return (
        <div style={postStyle}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Post No: {id}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Post Title: {title}
                        </Typography>
                        <Typography variant="body2" color="textMain" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        onClick={() => handleButton(id)}
                        size="small"
                        color="primary">
                        See More
                                </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;