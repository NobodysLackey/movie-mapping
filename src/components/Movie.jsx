import { useState } from 'react'
import Genre from "./Genre"
import Overview from "./Overview"

const Movie = ({ movie }) => {
  const [showOverview, setShowOverview] = useState(false)

  const toggleOverview = () => {
    showOverview ? setShowOverview(false) : setShowOverview(true)
  }

  return (
    <div className="poster">
      {showOverview ? <Overview toggleOverview={toggleOverview} overview={movie.overview} backdrop={movie.backdrop_path} /> : <img src={movie.poster_path} alt="poster" onClick={toggleOverview} />}
      <h2 className="movie-title">{movie.title}</h2>
      <h5 className="movie-date">Release Date: {movie.release_date}</h5>
      <div className="genres">
        {movie.genres.map((genre) => (
          <Genre key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  )
}

export default Movie
