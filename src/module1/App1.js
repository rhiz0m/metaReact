import Heading from "./components/heading"
import styles from "./styles/App.module.css"
import Bag from "./components/bag"
import Apples from "./components/apples"
import Pears from "./components/pears"

// Parent-component
function App1() {

  const randomNumber = Math.floor(Math.random() * 100)

  return (
    <div className={styles.appContainer}>
      <Heading firstName="Bob!" />
      <Heading firstName="Sandra!" />
      <Bag background="#ff5533">
        <Apples color="red" number="4" background="" />
      </Bag>
      <Bag background="#33ff74">
        <Pears color="green" friend="Peter" />
        <h1>
          {Math.random() >= 0.5 ? "value equal or over 0.5" : "value under: 5"}
        </h1>
      </Bag>
      <p>
        Here's a random number from 0 to 10: {Math.floor(Math.random() * 10)}
      </p>
      <p>And here is a random number between 0 and 100: {randomNumber}</p>
    </div>
  )
}

export default App1
// Heading is a childcomponent to App1

// Use of Ternery operators and functions in JSX
