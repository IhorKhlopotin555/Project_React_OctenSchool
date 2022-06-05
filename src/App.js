import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import MainLayout from "./MainLayout/MainLayout";
import Movie from './components/Movie/Movie';
import MoviesPage from "./pages/MoviesPage";


function App() {
  return (
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'moviesListCard'}/>}/>
          <Route path={'moviesListCard'} element={<MoviesPage/>}/>
          <Route path={'movie'} element={<Movie />}/>
        </Route>
      </Routes>
  );
}

export default App;
