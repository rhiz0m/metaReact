function Btn() {
const eventHandler = () => console.log("Button clicked")

    return (
        <div>
            <button onClick={eventHandler}>Click Me!</button>
        </div>
    )
}

export default Btn