import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `7d4ac179e844e8d16c4af681deb5028c`,
  include_adult: false,

};

export const fetchTrendMovies = async (page = 1, lng) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
        language: lng,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};



export const fetchMovieByName = async (query) => {
  try {
    const urlParam = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=7d4ac179e844e8d16c4af681deb5028c&language=en-US&query=${query}&page=1&include_adult=false`
      : `/trending/movie/day`;
    const { data } = await axios.get(urlParam);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const fetchMovieById = async (movieId, lng) => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, {
      params: {
        id: movieId,
        language: lng,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie with that name');
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no cast movie');
  }
};


export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    throw new Error('Oops, we don`t have any reviews');
  }
};

