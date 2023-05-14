// import Home from "pages/Home";
// import Movies from "pages/Movies";
import {  Route, Routes } from "react-router-dom";
// import { StyledHeader,StyledNavLink } from "./App.styled";
// import HeaderLayout from "./HeaderLayout/HeaderLayout";
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Container } from "components/Container";
// import MovieDetails from "pages/MovieDetails";

const HeaderLayout = lazy(() => import('./HeaderLayout/HeaderLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return ( <Container>

      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />


          <Route path="/movies/:movieId" element={<MovieDetails/>} >
          {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          </Route>
           <Route path="*" element={<div> Error</div>} />
   
      </Routes>
      <Toaster/>
    </Container>
  );
};
