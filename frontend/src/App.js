import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';

function App() {
  const [videoId, setVideoId] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchVideoData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:3000/api/video/${videoId}`);
      if (!response.ok) {
        throw new Error('Video not found');
      }
      const data = await response.json();
      setVideoData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Group>
              <Form.Control 
                type="text"
                value={videoId}
                onChange={(e) => setVideoId(e.target.value)}
                placeholder="Enter Unlisted Video ID"
              />
            </Form.Group>
            <Button variant="primary" onClick={fetchVideoData}>Load Video</Button>
          </Form>

          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {videoData && <VideoPlayer videoData={videoData} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
