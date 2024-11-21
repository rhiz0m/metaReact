import Fruits from "./labsModule2/fruits"
import FruitsCounter from "./labsModule2/fruitsCounter"

// Lab Module 2: Managing state in React: the task is to lift state up from the Fruits component to the App component, so that you can then pass the state information to both the Fruits component and the FruitsCounter component.

function App2() {
  const fruitsList = [
    { fruitsName: "apple", id: 1 },
    { fruitsName: "banana", id: 2 },
    { fruitsName: "pear", id: 3 },
    { fruitsName: "Mango", id: 4 },
  ]

  return (
    <div>
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruitsList} />
      <FruitsCounter fruits={fruitsList} />
    </div>
  )
}

export default App2

/**
 * 
 * 
 * 
function App2() {
  return (
    <div>
      <Wallet />
      <MealApp />
    </div>
  )
}
 */
