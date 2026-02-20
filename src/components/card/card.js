
export function Card({movie}) {

    return(
        <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <span>{movie.director}</span>
        <span>{movie.likes}</span>
        </div>
    )
}

export default Card;