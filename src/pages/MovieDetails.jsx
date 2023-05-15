import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { fetchMovieById } from '../services/api';
import MovieCard from '../components/MovieDetailCard/MovieDetailCard';
import { Button, Container, StyledLink } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);
 

  console.log(movieId);

  return (
    <main>
      <Container>
        <StyledLink to={location?.state?.from ?? '/'}>
          <Button type="button">
            <BiArrowBack
              style={{ width: '25px', height: '25px', display: 'inline-block' }}
            />
            Go back
          </Button>
        </StyledLink>

        {Object.keys(selectedMovie).length !== 0 && <MovieCard movie={selectedMovie} />}
        {/* <MovieCard movie={selectedMovie} /> */}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;