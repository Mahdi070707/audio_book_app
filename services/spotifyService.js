const axios = require('axios');
require('dotenv').config();

// Function to get Spotify access token
const getSpotifyAccessToken = async () => {
  const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
    },
    params: {
      grant_type: 'client_credentials',
    },
  });
  return tokenResponse.data.access_token;
};

// Function to search for audiobooks (or any specific type of content)
const searchAudiobooks = async (query) => {
  const token = await getSpotifyAccessToken();
  
  const response = await axios.get('https://api.spotify.com/v1/search', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    params: {
      q: query,
      type: 'album', // You can adjust this for specific types like 'audiobook' if available
    },
  });

  return response.data.albums.items; // Adjust this based on what data you need
};

module.exports = { searchAudiobooks };
