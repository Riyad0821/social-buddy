import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../../Components/Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Bottom from '../Bottom/Bottom';

const useStyles = makeStyles({
    root: {
        margin: 20,
        minHeight: 200,
        display:'flex'

    },
    media: {
        height: 140
    },
});

const Detail = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [ post, setPost] = useState([]);
    const [ comment, setComment ] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])

    return (
        <div>
             <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center', color:'green'}}>
                            Post No: {post.id}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Post Title: {post.title}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="p">
                            Post Body: {post.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            {
                <h2 style={{textAlign: 'center', color:'Blue'}}>Comments</h2>
            }
            {
                comment.map(comment => <Comment comment={comment}></Comment>)
            }
            {
                <Bottom></Bottom>
            }
        </div>
    );
};

export default Detail;