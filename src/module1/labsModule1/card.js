function Card(props) {

const cardStyle = {
  padding: "20px",
  border: "2px solid black",
  background: props.background || "#33ff74",
  margin: "20px"
}    
  return (
    <div className="card" style={cardStyle} >
      <h2>{props.h2}</h2>
      <h3>{props.h3}</h3>
    </div>
  )
}

export default Card