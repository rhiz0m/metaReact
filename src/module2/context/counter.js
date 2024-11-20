import { useMealsListContext } from "./mealprovider"

function Counter() {

const { meals }  = useMealsListContext()

const borderStyling = {
    padding: "8px",
    backgroundColor: "yellow",
    border: "1px solid black",
    borderRadius: "8px",
    maxWidth: "200px",
    margin: "10px auto"
}

    return (
        <div style={ borderStyling }>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    )
}

export default Counter