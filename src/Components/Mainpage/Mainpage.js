import React from 'react';
import { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Bottom from '../Bottom/Bottom';
import Head from '../Head/Head';

const Mainpage = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  
    return (
        <div>
            {
                <Head></Head>
            }
            {
            posts.map(post => <Post post={post}></Post>)
            }
            {
                <Bottom></Bottom>
            }
        </div>
    );
};

export default Mainpage;