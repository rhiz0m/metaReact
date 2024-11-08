import Heading from "./components/heading"

// Parent-component
function App1() {
  return (
    <div className="App">
      <Heading firstName="Bob!" />
      <Heading firstName="Sandra!" />
    </div>
  )
}

export default App1
// Heading is a childcomponent to App1
