import axios from 'axios';

const KEY = 'AIzaSyA5-Pjcwfww3rBnQhpNJsrHMd9pU3G3PSI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

