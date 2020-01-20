import React from 'react';
import { Link } from 'react-router-dom'


const Track = ({track}) => (
  <div className="col-md-6">
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5>{track.artist_name}</h5>
        <br />
        <p className="card-text">
          <strong><i className="fas fa-play-circle"></i> Track</strong>: {track.track_name}
          <br />
          <strong><i className="fas fa-compact-disc"></i> Albun</strong>: {track.album_name}
          <br />
          <br />
          <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right"></i> View lyrics
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Track;
