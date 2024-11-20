import MealProvider from "./mealprovider"
import MealsList from "./mealsList"
import Counter from "./counter"

function MealApp() {
  return (
    <div>
      <MealProvider>
        <MealsList />
        <Counter />
      </MealProvider>
    </div>
  )
}

export default MealApp