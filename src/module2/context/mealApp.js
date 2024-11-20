import MealProvider from "./mealprovider"
import MealsList from "./mealsList"
import Counter from "./counter"

function MealApp() {
  return (
    <div>
      <h1>Meal App</h1>
      <MealProvider>
        <Counter />
        <MealsList />
      </MealProvider>
    </div>
  )
}

export default MealApp