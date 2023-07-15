const Genre = ({ genre }) => {

  let colorVariable

  switch (genre.name) {
    case 'Action':
      colorVariable = 'blue'
      break
    case 'Adventure':
      colorVariable = 'green'
      break
    case 'Fantasy':
      colorVariable = 'coral'
      break
    case 'Crime':
      colorVariable = 'orange'
      break
    case 'Thriller':
      colorVariable = 'midnightblue'
      break
    case 'Science Fiction':
      colorVariable = 'maroon'
      break
    case 'Horror':
      colorVariable = 'indigo'
      break
    case 'Animation':
      colorVariable = 'DarkSlateGray'
      break
    case 'Comedy':
      colorVariable = 'darkblue'
      break
    case 'Drama':
      colorVariable = 'darkgreen'
      break
    case 'Family':
      colorVariable = 'darkred'
      break
    case 'Music':
      colorVariable = 'darkorange'
      break
    case 'Mystery':
      colorVariable = 'gold'
      break
    case 'History':
      colorVariable = 'saddlebrown'
      break
    case 'Romance':
      colorVariable = 'darkmagenta'
      break
    case 'War':
      colorVariable = 'black'
      break
    case 'TV Movie':
      colorVariable = 'teal'
      break
    case 'Western':
      colorVariable = 'lightgreen'
      break
    case 'Documentary':
      colorVariable = 'lightred'
      break
    default:
      colorVariable = 'green'
  }

  return (
    <div className="genre" style={{ backgroundColor: colorVariable, color: "white" }}>{genre.name}</div>
  )
}

export default Genre
