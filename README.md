Video Playback Application

## Project Overview
This application is a video playback application that utilizes the YouTube V3 API. It allows users to fetch and display videos using unlisted YouTube Video IDs, with a custom video player integrated into the app. The project is structured with both a backend and frontend, ensuring a complete and functional web application.

## Features
- **YouTube API Integration**: Leverages the YouTube V3 API to fetch video content.
- **Custom Video Player**: Enhanced user experience with a custom-built video player.
- **Support for Unlisted Videos**: Ability to fetch and display unlisted YouTube videos.

## Technology Stack
- **Backend**: Node.js, Express.js
- **Frontend**: React.js, HTML, CSS

## Installation and Setup

1. **Clone the Repository**
   ```
   git clone https://github.com/BhuwanAwasthi/videoplayeryt
   ```

2. **Install Dependencies**
   Navigate to the project directory and install required dependencies.
   ```
   npm install
   ```

3. **Environment Variables**
   Set up the necessary environment variables in a `.env` file based on the provided template.

4. **Running the Server**
   To start the backend server, navigate to the server directory and run:
   ```
   node server.js
   ```

5. **Starting the Frontend**
   In the frontend directory, execute:
   ```
   npm start
   ```

## Backend Structure

- **server.js**: The main server file.
- **routes.js**: Defines the application routes.
- **youtubeApi.js**: Handles YouTube API interactions.

## Frontend Structure

- **App.js**: Main React component.
- **index.js**: Entry point for React components.
- **VideoPlayer.js**: Custom video player component.
- **index.html**: Basic HTML structure.

## Usage

To use the application, simply navigate to the frontend URL, where you can enter an unlisted YouTube video ID. The app will then fetch and display the video using the custom player.

