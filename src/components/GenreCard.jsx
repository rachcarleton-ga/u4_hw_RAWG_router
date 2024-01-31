

const GenreCard = (props) => {

  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt={props.name}/>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.gamesCount} games</p>
      </div>
    </div>
  )
}

export default GenreCard
