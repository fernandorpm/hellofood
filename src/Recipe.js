import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="recipe" >
            <div className="container"><img src={image} alt="" /></div>
            <hr/>
            <h2>{title}</h2>
            <p>Calories: {calories} kcal</p>
            <ul>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ul>
            
        </div>
    );
};

export default Recipe;