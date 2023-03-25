import React, { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import { Icon } from "@iconify/react";
import { MealItem } from "./MealsItem/MealItem";
import styleAvailableMeals from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(
        "https://meals-shopping-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const responseData = await response.json();
      console.log(responseData);
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }
      console.log(loadedMeals);
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    
      fetchMeal().catch ((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    })
  }, []);
  if (isLoading) {
    return (
      <section className={styleAvailableMeals.MealsLoading}>
        <Icon icon="eos-icons:loading" color="white" width="100" height="100" />
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styleAvailableMeals.MealsError}>
        <p> {httpError}</p>
      </section>
    );
  }
  const mealList = meals.map((meal) => (
    <MealItem key={meal.id} name={meal.name} price={meal.price} id={meal.id} />
  ));
  return (
    <section className={styleAvailableMeals.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export { AvailableMeals };
