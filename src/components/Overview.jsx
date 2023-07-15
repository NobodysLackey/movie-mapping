const Overview = ({ overview, backdrop, toggleOverview }) => {

  return (
    <div className="overview">
      <img src={ backdrop ? backdrop : "https://static.wikia.nocookie.net/fictionaltvstations/images/4/4b/At_the_Movies.jpg/revision/latest?cb=20171002160046" } alt="backdrop" onClick={toggleOverview}/>
      <div>{ overview ? overview : "No overview has been provided for this film..." }</div>
      <button onClick={toggleOverview}>Hide</button>
    </div>
  )
}

export default Overview
