import React from "react";
import style from "./recipe.module.css";

const Receipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredient.weight}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <img src={image} alt="" className={style.image} />
    </div>
  );
};

export default Receipe;
