import { useState } from "react"

function Restaurant() {
    const [item, setItem] = useState("eat")

function handleItem() {
    setItem((previousItem) => (previousItem === "eat" ? "drink" : "eat")) 
}
    return (
        <div>
            <h1>What would you like to {item}</h1>
            <button value={item} onClick={ handleItem }>Click me!</button>
        </div>
    )
}

export default Restaurant