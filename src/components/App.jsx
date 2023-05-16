
import {  Route, Routes } from "react-router-dom";

import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Container } from "components/Container";

const HeaderLayout = lazy(() => import('./HeaderLayout/HeaderLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return ( <Container>

      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />


          <Route path="/movies/:movieId" element={<MovieDetails/>} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
          </Route>
       
           <Route path="*" element={<div> Error</div>} />
           </Route>
      </Routes>
      <Toaster/>
    </Container>
  );
};
