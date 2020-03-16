import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import download from '../download.jpg'
//class based component because we will use state
class Home extends Component {

    state = {
        posts: []
    }
    //componentDidMount -- do this when apge loads
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
 
    render() {
        const { posts } = this.state; //? tenary operation
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={download} alt="Pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text"> {post.title} </span>
                            </Link>
                            <p> {post.body} </p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">My First React Project</div>
        )

        return(
            <div className="container home" >
                <h2 className="center">How well does this look to you?</h2>
                {postList}
            </div>
        )
    };
       
};


export default Home;
