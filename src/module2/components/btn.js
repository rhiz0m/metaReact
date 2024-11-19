function Btn() {
const eventHandler = () => console.log("Mouse over event!")

    return (
        <div>
            <button onMouseOver={eventHandler}>Hover over me!</button>
        </div>
    )
}

export default Btn

// Event: click a button
// Event handler: onClick
// Action: for example open a menu or in this case console.log a message

// function Btn() {
//   const eventHandler = () => console.log("Button clicked")

//   return (
//     <div>
//       <button onClick={eventHandler}>Click Me!</button>
//     </div>
//   )
// }