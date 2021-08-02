import React from 'react';
import { Link } from 'react-router-dom';

export default function Artist(props) {
    if(!props.artist) return null;
    const noImage = "https://www.hpl-service.eu/content/images/thumbs/def/default-image_600.png";
    const {id,name,images,type,genres,followers,popularity} = props.artist;

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <img src={images.length === 0 ? noImage : images[1].url} alt="" className="card-img-top" />
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Name</strong>
                                <span className="float-end"> {name} </span>
                                
                            </li>

                            <li className="list-group-item">
                                <strong>Type</strong>
                                <span className="float-end"> {type} </span>
                            </li>

                            <li className="list-group-item">
                                <strong>Genres</strong>
                                <span className="float-end"> {genres.join(',')} </span>
                            </li>

                            <li className="list-group-item">
                                <strong>Followers</strong>
                                <span className="float-end"> { followers.total } </span>
                            </li>
                            
                            <li className="list-group-item">
                                <strong>Popularity</strong>
                                <span className="float-end"> { popularity } </span>
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <Link to={`/track/${id}`} className="btn btn-outline-success">Load Tracks</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}