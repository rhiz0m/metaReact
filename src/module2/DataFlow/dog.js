// Parent component
function Dog() {
const styling = {
  padding: "20px",
  background: "yellow",
  textAlign: "left",
}

  return <div className="dog" style={ styling}>
    <h1><Puppy name="Max"/></h1>
  </div>
}


// children
function Puppy(props) {
    const nameStyle = {
        color: "blue"
    }
  return (
    <div>
      <p>The dogs name is <span style={nameStyle}>{props.name}</span> and the shape of the dogs bowl is 
        <Bowl bowlshape="square" /> and it's currently <Bowl status="empty"/></p>
    </div>
  )
}
// Grandchildren
function Bowl(props) {
const bowlStatus = {
    color: "purple"
}
const bowlShape = {
    color: "green"
}

  return (
    <div>
      <span style={ bowlShape }>{props.bowlshape}</span>
      <span style={bowlStatus}>{props.status}</span>
    </div>
  )
}

export default Dog

// The data is always set in the parent