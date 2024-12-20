import { useState } from "react"

export default function InputComponent() {
  const [inputText, setText] = useState("Hi!")

  function handleChange(e) {
    setText(e.target.value) // Keeps track of the users input
  }

  return (
    <div>
      <input value={inputText} onChange={handleChange}></input>
      <p>You typed {inputText}</p>
      <button onClick={() => setText("Hi!")}>Reset</button>
    </div>
  )
}
