// This code will toggle the events in the console but not in the browser!

function DarkmodeToggler() {
  let darkmodeIsOn = true
  const darkMode = <h1>Darkmode is on!</h1>
  const lightMode = <h1>Lightmode is on!</h1>

  function handleClick() {
    darkmodeIsOn = !darkmodeIsOn
  }

  return (
    <div>
      {darkmodeIsOn ? darkMode : lightMode}
      <button onClick={handleClick}>Switch modes</button>
    </div>
  )
}

export default DarkmodeToggler
