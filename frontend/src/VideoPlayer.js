import React from 'react';
import { Card } from 'react-bootstrap';

const VideoPlayer = ({ videoData }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoData.id}`;

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>{videoData.snippet.title}</Card.Title>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe 
            className="embed-responsive-item" 
            title="YouTube video player" 
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </Card.Body>
    </Card>
  );
}

export default VideoPlayer;
