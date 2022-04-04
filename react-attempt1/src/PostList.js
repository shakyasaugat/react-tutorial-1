import React, {useState, useEffect } from 'react';
import CardMediaExample from "./CardMediaExample";

const PostList = props => {
    const [post, getPost] = useState([]);
    const API = 'http://dtmv.local/wp-json/wp/v2/posts';
    const fetchPost = () => {
        fetch(API)
        .then((res) => res.json())
        .then((res) => {
               getPost(res)
        })
    }
    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div className="post-list-wrapper">
            {post.map( (item, index) => <CardMediaExample key={index} attribute={item}/> )}
        </div>
    )
}
export default PostList;