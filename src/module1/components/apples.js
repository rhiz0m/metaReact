// Props.children : Apples

function Apples(props) {
    return (
      <>
        <h2>These apples are: {props.color}</h2>
        <h3>There are {props.number} apples.</h3>
      </>
    )
}

export default Apples