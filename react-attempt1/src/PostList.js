import React, {Component, useEffect } from 'react';
import CardMediaExample from "./CardMediaExample";

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            offset: 0,
            perPage: 10,
            page: 1

        };
        this.handlePageClick = this.handlePageClick.bind(this);
        
    }
    receivedData() {
        const page = this.state.page;
        const API = `http://dtmv.local/wp-json/wp/v2/posts/?page=${page}`;

        fetch(API)
        .then((res) => res.json())
        .then((res) => {
            // const post = Object.keys(res).map( (item, index) => <CardMediaExample key={index} attribute={item}/> );
            const nextPage = this.state.page + 1;
            this.setState({
                post: res,
                page: nextPage
            });
        })
    }
    render() {
        return (
            <div className="post-list-wrapper">
                {this.state.post.map( (item, index) => <CardMediaExample key={index} attribute={item}/> )}
                <button onClick={this.handlePageClick}>Next</button>
            </div>
        )
    }
    handlePageClick = (e) => {
        e.preventDefault();
        this.receivedData();

    };
    componentDidMount() {
        this.receivedData()
    }
}