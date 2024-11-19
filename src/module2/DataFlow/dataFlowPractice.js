
import Child from "./child"

function DataflowPractice() {
  const date = new Date()
  return (
    <div>
      <Child message={date.toLocaleTimeString()}/>
    </div>
  )
}

export default DataflowPractice