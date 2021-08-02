import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'https://spotify-api-wrapper.appspot.com';


export default class Track extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            tracks: [],
            playing:false,
            audio: null,
            playPreviewUrl: null
        };
        this.playAudio = this.playAudio.bind(this);
    }

    componentDidMount() {
        axios.get(`${url}/artist/${this.state.id}/top-tracks`)
            .then(res => {
                console.log('tracks =', res.data.tracks);
                this.setState({
                    tracks: res.data.tracks
                });
            })
            .catch(err => console.log(err.message));
    }

    playAudio = (url) => {
        const audio = new Audio(url);
        if(!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio, playPreviewUrl: url});
        } else {
            this.state.audio.pause();
            if(this.state.playPreviewUrl === url) {
                this.setState({ playing: false });
            }else {
                audio.play();
                this.setState({audio, playPreviewUrl: url });
            }
        }
    }

    trackIcon = (url) => {
        if(!url) {
            return <i className="bi bi-bell-slash-fill"></i>;
        }
        if(this.state.playing && this.state.playPreviewUrl === url) {
            return <button className="btn btn-sm btn-warning"><i className="bi bi-pause-fill"></i> </button>;
        } 
        return <button className="btn btn-sm btn-success"> <i className="bi bi-play-fill"></i> </button>;
    }

    render() {
        if(!this.state.tracks) return null;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5 mb-3">
                        <h3 className="display-3 text-success">Tracks</h3>
                    </div>
                </div>

                {
                    this.state.tracks.length === 0 ? (
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h5 className="text-muted">No Tracks Found</h5>
                                <Link to="/" className="btn btn-primary">Return to Home</Link>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            {
                                this.state.tracks.map((item,key) => {
                                    return (
                                        <div className="col-md-3" key={key}>
                                            <div className="card mt-2 mb-2" onClick={() => this.playAudio(item.preview_url)} >
                                                <img src={item.album.images[1].url} alt="" className="card-img-top" />
                                                <div className="card-body">
                                                    <h6 className="text-center"> {item.name} </h6>
                                                </div>

                                                <div className="card-footer">
                                                    {this.trackIcon(item.preview_url)}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}