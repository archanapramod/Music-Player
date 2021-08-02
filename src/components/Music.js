import React, { Component } from 'react';
import axios from 'axios';
import Artist from '../util/Artist';
import Search from '../util/Search';
const url = 'https://spotify-api-wrapper.appspot.com';


export default class Music extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist: null,
        };
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        // initial data request
    //    this.searchHandler('sonu nigam');
    }

    searchHandler = (name) => {
        axios.get(`${url}/artist/${name}`)
            .then(res => {
                console.log('artist=',res);
                this.setState({
                    artist: res.data.artists.items[0]
                });
            })
            .catch(err => console.log(err.message));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h3 className="display-3 text-success">Music Player</h3>
                    </div>
                </div>
                <Search search={this.searchHandler} />
                <Artist artist={this.state.artist} />
            </div>
        )
    }
}