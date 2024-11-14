let userName = "Andreas"

// if (userName === "Andreas") {
//     console.log("Hi Andreas!")
// } else {
//     console.log("Hello stranger!")
// }

const checkUser = userName === "Andreas" ? "Hi, Andreas" : "Hello stranger!"; 
console.log(checkUser)
// name == Bob ? "Yes, it is Bob" : "I don't know this person";

//userName === "Andreas" ? "Hi, Andreas" : "Hello stranger!" 
// Always assign it to an variable or call it from an function for example console.log()



/**** * Using ternary expressions in JSX. Run App1.js for execution ***/
// Example below of ternary operators in JSX

// function App1() {
//   const randomNumber = Math.floor(Math.random() * 100)

//   return (
//     <div className={styles.appContainer}>
//         <Pears color="green" friend="Peter" />
//         <h1>
//           {Math.random() >= 0.5 ? "value equal or over 0.5" : "value under: 5"}
//         </h1>
//       <p>
//         Here's a random number from 0 to 10: {Math.floor(Math.random() * 10)}
//       </p>
//       <p>And here is a random number between 0 and 100: {randomNumber}</p>
//     </div>
//   )
// }
