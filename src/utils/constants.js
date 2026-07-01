export const bg_Logo="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
export const icon_url="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";


export const API_OPTIONS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key": process.env.REACT_APP_TRAKT_API_KEY
  }
};

export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;