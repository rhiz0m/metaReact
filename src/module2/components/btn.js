function Btn() {
const eventHandler = () => console.log("Mouse over event!")

    return (
        <div>
            <button onMouseOver={eventHandler}>Hover over me!</button>
        </div>
    )
}

export default Btn

// function Btn() {
//   const eventHandler = () => console.log("Button clicked")

//   return (
//     <div>
//       <button onClick={eventHandler}>Click Me!</button>
//     </div>
//   )
// }