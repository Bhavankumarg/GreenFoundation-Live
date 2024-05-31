'use client'

import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

const Contact7Form = () => {

    const [post, setPost] = useState({});
    const postId = 616; // Replace with the actual post ID

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(
                    `https://beta.nautilusshipping.com.in/wp-json/wp/v2/posts/${postId}`
                );

                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        }

        fetchPost();
    }, [postId]);


    return (
        <>
            <Container>
                <div>
                    <h1>{post.title?.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
                </div>
            </Container>
        </>
    )
}

export default Contact7Form