
const Card = (props) => {
    return (
        <div className = "card">
            <img src = {props.image} alt = {props.name}/>
            <h3>{props.name}</h3>
            <p>{props.cuisine}</p>
            <a href = {props.website} target="_blank">Visit Website</a>
        </div>
    )
}

export default Card;