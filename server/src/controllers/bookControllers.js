// server/src/controllers/bookController.js

import axios from "axios";

// Function to get a Spotify access token
const getSpotifyAccessToken = async () => {
  const tokenResponse = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({ grant_type: "client_credentials" }).toString(),
    {
      headers: {
        "Authorization": `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return tokenResponse.data.access_token;
};

// Function to search audiobooks on Spotify
const searchAudiobooks = async (query) => {
  const token = await getSpotifyAccessToken();
  const response = await axios.get("https://api.spotify.com/v1/search", {
    headers: { Authorization: `Bearer ${token}` },
    params: { q: query, type: "audiobook", limit: 5 },
  });
  return response.data.audiobooks.items || []; // Ensure we return an array
};

// Controller function to add books
export const addBook = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      res.status(400).json({ message: "Query parameter is required" });
      return;
    }
    const spotifyBooks = await searchAudiobooks(query);
    if (spotifyBooks.length === 0) {
      res.status(404).json({ message: "No audiobooks found" });
      return;
    }
    // Process the data and save it to the database
    // Example:
    // const addedBooks = await Promise.all(
    //   spotifyBooks.map(async (spotifyBook) => {
    //     return await Book.create({
    //       title: spotifyBook.name,
    //       author: spotifyBook.authors.map((author) => author.name).join(", "),
    //       genre: spotifyBook.genres?.join(", ") || "Unknown",
    //       spotifyUrl: spotifyBook.external_urls.spotify,
    //       isbn: "N/A", // Default value for isbn
    //       pages: 0,   // Default number of pages
    //       edition: 1, // Default edition
    //       is_paperback: false,
    //     });
    //   })
    // );
    res.status(201).json(spotifyBooks);
  } catch (err) {
    console.error("Error adding book:", err);
    res.status(500).json({ message: "Error adding book", error: err });
  }
};

// Used this for testing to create a book with the database
// const newBook = await Book.create({
//   title: "To Kill A Mockingbird",
//   author: "Harper Lee",
//   isbn: "45adf",
//   pages: 456,
//   edition: 46,
//   is_paperback: true
// });
