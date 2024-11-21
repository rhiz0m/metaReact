

function Fruits(props) {

    return (
        <div>
            { props.fruits.map(f => <p key={f.id}>{f.fruitsName}</p>) }
        </div>
    )
}

export default Fruits