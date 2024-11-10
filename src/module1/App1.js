import Heading from "./components/heading"
import styles from "./styles/App.module.css"
import Bag from "./components/bag"
import Apples from "./components/apples"
import Pears from "./components/pears"

// Parent-component
function App1() {
  return (
    <div className={styles.appContainer}>
      <Heading firstName="Bob!" />
      <Heading firstName="Sandra!" />
      <Bag background="#ff5533">
        <Apples color="red" number="4" background="" />
      </Bag>
      <Bag background="#33ff74">
        <Pears color="green" friend="Peter" />
      </Bag>
    </div>
  )
}

export default App1
// Heading is a childcomponent to App1
