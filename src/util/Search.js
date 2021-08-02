import React, { Component } from 'react'

export default class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            album: ''
        };
        this.onChangeAlbum = this.onChangeAlbum.bind(this);
    }

    onChangeAlbum(e) {
        this.setState({
            album: e.target.value
        })
    }

    resetForm = (e) => {
        e.preventDefault();
        this.setState({
            album: ''
        });
    }


    submitHandler = (e) => {
        e.preventDefault();
        const data = this.state.album;
        console.log('search key =', data);
        this.props.search(data);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3 mb-3 mt-3">
                    <form onSubmit={this.submitHandler} autoComplete="off">
                        <fieldset>
                            <legend className="text-center">Search Album/Artist</legend>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" name="album" id="album" className="form-control" value={this.state.album} onChange={this.onChangeAlbum}  placeholder="Enter your search input" required />
                                    <button type="submit" className="btn btn-outline-success">Search</button>
                                    <button onClick={this.resetForm} className="btn btn-outline-danger">
                                        Clear</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}