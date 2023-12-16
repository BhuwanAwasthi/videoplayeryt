const express = require('express');
const router = express.Router();
const { getVideoDetails } = require('./youtubeApi');

router.get('/:id', async (req, res, next) => {
  try {
    const videoId = req.params.id;
    const videoDetails = await getVideoDetails(videoId);
    if (videoDetails) {
      res.json(videoDetails);
    } else {
      res.status(404).send('Video not found');
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
