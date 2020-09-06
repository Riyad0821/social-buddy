import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 140,
  },
});
  


const Post = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    const postStyle= {
        margin: '20px',
        padding: '10px'
    }

    return (
        <div>
            <h4>Social Buddy</h4>
            {
                posts.map(post => (
                    <div style={postStyle}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.body}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                    
                ))
            }
        </div>
    );
};

export default Post;