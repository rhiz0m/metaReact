import { useMealsListContext } from "./mealprovider"

function MealsList() {
  const { meals, setMeals } = useMealsListContext()

  const addMeal = () => {
    const newMeal = "pasta"
    setMeals([...meals, newMeal])
  }

  return (
    <div>
      <h1>Meals list using Context API</h1>
      <button value="Add a Meal" onClick={addMeal}>
        Add a meal!
      </button>
      <div>
        {meals.map((meal, index) => (
          <h2 style={containerStyle} key={index}>
            {meal}
          </h2>
        ))}
      </div>
    </div>
  )
}

export default MealsList

    const containerStyle = {
      padding: "20px",
      backgroundColor: "green",
      border: "1px solid black",
      borderRadius: "8px",
      maxWidth: "400px",
      margin: "10px auto",
    }