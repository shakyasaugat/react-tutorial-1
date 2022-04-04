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
        this.getNextPage = this.getNextPage.bind(this);
        this.getPrevPage = this.getPrevPage.bind(this);
        
    }
    receivedData() {
        const page = this.state.page;
        const API = `http://dtmv.local/wp-json/wp/v2/posts/?page=${page}`;

        fetch(API)
        .then((res) => res.json())
        .then((res) => {
            // const post = Object.keys(res).map( (item, index) => <CardMediaExample key={index} attribute={item}/> );
            this.setState({
                post: res,
            });
        })
    }
    render() {
        return (
            <div className="post-list-wrapper">
                {this.state.post.map( (item, index) => <CardMediaExample key={index} attribute={item}/> )}
                <button onClick={this.getNextPage}>Next</button>
                <button onClick={this.getPrevPage}>Prev</button>
            </div>
        )
    }
    getNextPage = (e) => {
        e.preventDefault();
        const nextPage = this.state.page + 1;
        this.setState({page: nextPage})
        this.receivedData();

    };
    getPrevPage = (e) => {
        e.preventDefault();
        const prevPage = this.state.page - 1;
        this.setState({page: prevPage})
        this.receivedData();

    };
    componentDidMount() {
        this.receivedData()
    }
}