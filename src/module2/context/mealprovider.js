import React from "react"

const MealsContext = React.createContext()

const todaysMeals = ["Pizza", "Burger", "Chicken and Rice"]

const MealProvider = ({ children }) => {
const [meals, setMeals] = React.useState(todaysMeals)

    return (
        <div>
            <MealsContext.Provider value={{meals}}>
                { children }
            </MealsContext.Provider>
        </div>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext)
export default MealProvider