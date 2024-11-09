// Props.children for Apples and Pears

function Bag(props) {
  const bag = {
    padding: "20px",
    border: "2px solid black",
    background: props.background || "#33ff74",
    margin: "20px 10px",
  }
  return <div style={bag}>{props.children}</div>
}

export default Bag
