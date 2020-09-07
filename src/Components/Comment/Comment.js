import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 150,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    display: 'flex'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: '50%',
    padding: 5
  }
});

const Comment = (props) => {
  const classes = useStyles();
  const { id, body, email } = props.comment;
  const [image, setImage] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setImage(data))
  })
  //console.log(props.comment);
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <img className={classes.img} src={image.url} alt="" />
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Comment No: {id}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            User Email: {email}
          </Typography>

          <Typography className={classes.pos} color="textMain">
            {body}
          </Typography>

        </CardContent>
      </Card>
    </div>
  );
};

export default Comment;