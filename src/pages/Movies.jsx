import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieByName } from '../services/api';
import SearchMovies from '../components/MoviesSearch/MoviesSearch';
import {
  List,
  ListItem,
  SectionTitle,
  StyledLink,
  StyledSectionForm,
} from '../components/MovieList/MovieList.styled';

const Movies = () => {
 
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);


  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main >
      <StyledSectionForm>
        <SectionTitle>Movies Page</SectionTitle>
        <SearchMovies onSubmit={handleSubmit} movie={setSearchParams}/>{' '}
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt = {`${movie.original_title} poster`}/> 
              {movie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </StyledSectionForm>
    </main>
  );
};

export default Movies;
