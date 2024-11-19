// Handling events using inline anonymous ES5 functions
// This approach allows you to directly pass in an ES5 function declaration as the onClick event-handling attribute’s value:
function ES5() {
  return (
    <div>
      <button
        onClick={function () {
          console.log("first example")
        }}
      >
        An inline anonymous ES5 function event handler
      </button>
    </div>
  )
}

ES5()
// Handling events using inline anonymous ES6 functions (arrow functions)
// With this approach, you can directly pass in an ES6 function declaration as the onClick event-handling attribute’s value:

function ES6() {
  return (
    <>
      <button onClick={() => console.log("second example")}>
        An inline anonymous ES6 function event handler
      </button>
    </>
  )
}
ES6()
// Handling events using separate function declarations
// With this approach, you declare a separate ES5 function declaration, and then you reference its name in the event-handling onClick attribute, as follows

function ES5separateFunctions() {
  function thirdExample() {
    console.log("third example")
  }
  return (
    <div className="thirdExample">
      <button onClick={thirdExample}>
        using a separate function declaration
      </button>
    </div>
  )
}

ES5separateFunctions()

// Handling events using separate function expressions
// n the following example, you’re assigning an anonymous ES6 arrow function to a const variable – hence, this is a function expression.

function ES6SeparateFunctions() {
const fourthExample = () => console.log('fourth example')

    return (
      <div className="fourthExample">
      
        <button onClick={fourthExample}>
      using a separate function expression
        </button>
    
      </div>
    )
}
ES6SeparateFunctions()