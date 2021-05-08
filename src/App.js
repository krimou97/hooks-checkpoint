import './App.css';
import { useState } from 'react';
import Filter from './components/filter/filter';
import Movielist from './components/movielist/movielist';


const movieslist = [
  {
      title:'Movie 01 ',
      description: 'Movie description 01',
      rating: 9,
      posterurl: 'url 01'
  },
  {
      title:'Movie 02 ',
      description: 'Movie description 02',
      rating: 6,
      posterurl: 'url 02'
  },
  {
      title:'Movie 03 ',
      description: 'Movie description 03',
      rating: 4,
      posterurl: 'url 03'
  },
  {
      title:'Movie 04 ',
      description: 'Movie description 04',
      rating: 9,
      posterurl: 'url 04'
  }
]

const App = () => {
  // eslint-disable-next-line
  const [movies, setMovies] = useState(movieslist)
  return (
    <>
      <Filter/>
      <Movielist movies={movies}/>
    </> 
  )
}

export default App;
