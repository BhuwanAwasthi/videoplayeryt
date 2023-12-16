require('dotenv').config();
const fetch = require('node-fetch');

const API_KEY = process.env.YOUTUBE_API_KEY;

const getVideoDetails = async (videoId) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items[0]; // Assuming single video detail is needed
  } catch (error) {
    console.error('Error fetching YouTube video details:', error);
    throw new Error('Error fetching video data');
  }
};

module.exports = { getVideoDetails };
