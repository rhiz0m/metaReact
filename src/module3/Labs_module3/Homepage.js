import logo from "./assets/images/logo.png"

function Homepage() {
  const randomUrl = "https://picsum.photos/400/265"

  const time = new Date()
  const day = time.toLocaleString("sv-se", { weekday: "long" })
  const morning = time.getHours() >= 6 && time.getHours() < 12
  let dayMessage

  switch (dayMessage) {
    case "monday":
      dayMessage = `Happy ${day}`
      break
    case "tuesday":
      dayMessage = `${day} four days to go!`
      break
    case "wednesday":
      dayMessage = `${day} Half way there`
      break
    case "thursday":
      dayMessage = `${day} start planning the weekend`
      break
    case "friday":
      dayMessage = `${day} wohoo, weekend is coming!`
      break
    case "saturday":
      dayMessage = `${day} just chill!`
      break
    case "sunday":
      dayMessage = `${day} Just keep chill'in`
      break
    default:
      dayMessage = `Stay calm and having fun!`
  }

  return (
    <div>
      <h1>Welcome to the Little Lemon site</h1>
      <h1>{dayMessage}</h1>
      {morning ? (
        <h2>have you had breakfast yet?</h2>
      ) : (
        <h2>Have a nice day!</h2>
      )}
      <h3>"Import" logo </h3>
      <img src={logo} alt="Little Lemon Logo" height={100} width={100} />
      <h3>"Require" logo </h3>
      <img
        src={require("./assets/images/logo.png")}
        alt="Little Lemon Logo"
        height={100}
        width={100}
      />
      <h3>"A random Url" photo</h3>
      <img src={randomUrl} alt="A random url-image" height={100} />
    </div>
  )
}

export default Homepage
