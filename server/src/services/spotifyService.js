// services/spotifyService.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

// Function to get Spotify access token
const getSpotifyAccessToken = async () => {
    const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', null, {
        headers: {
            Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
        },
        params: {
            grant_type: 'client_credentials',
        },
    });
    return tokenResponse.data.access_token;
};

// Function to search for audiobooks
const searchAudiobooks = async (query) => {
    const token = await getSpotifyAccessToken();
    const response = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            q: query,
            type: 'audiobook',
        },
    });
    return response.data.audiobooks.items;
};

export { searchAudiobooks };
