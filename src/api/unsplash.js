import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID JrPEAgzPDJoDPehhETx0TvLJfQljG31W3P99IeFA5Vs',
  },
})
