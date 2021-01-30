import React, { Component } from 'react'

export default class Post extends Component {
    
    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const datos = await res.json();
        this.setState({posts: datos})
    }
    
    render() {
        return (
            <div>
                <h1>Post</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
