import './App.css'
import genreArray from './genres.json'
import Movie from './components/Movie'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const API_KEY = import.meta.env.VITE_API_KEY

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
    )
    let moviesList = []
    response.data.results.forEach((movie, index) => {
      let genreList = []
      movie.genre_ids.forEach((id) => {
        genreArray.forEach((genre) => {
          if (genre.id === id) {
            genreList.push(genre)
          } else {
            return
          }
        })
      })
      moviesList.push({
        ...movie,
        genres: genreList,
        poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      })
    })
    setMovies(moviesList)
  }

  const changePage = (direction) => {
    if (direction === 'next') {
      setPage(page + 1)
    } else {
      setPage(page - 1)
    }
    setMovies([])
  }

  useEffect(() => {
    getMovies()
    // eslint-disable-next-line
  }, [page])

  return (
    <div className="App">
      <div className="title-bar">
        {page > 1 ? (
          <button onClick={() => changePage('back')}>Back</button>
        ) : (
          <div></div>
        )}
        <h1 className="title">Movie Mapping</h1>
        <button onClick={() => changePage('next')}>Next</button>
      </div>
      <div className="movie-grid">
        {movies?.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App
