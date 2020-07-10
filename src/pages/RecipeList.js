import React, { useState, useEffect } from 'react';
import TableTop from 'tabletop';

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        TableTop.init({
            key: '*****',
            callback: googleData => setRecipeList(googleData),
            simpleSheet: true
        })
    },[]);

    return (
        <div className="u-container recipe-list">
            <h1 className="recipe-list-header">RecipeList</h1>
            <ul className="recipe-list-items">
                {
                    recipeList.map((recipe, index) => (
                        <li 
                            key={index}
                            className="recipe-list-item">
                            <a href={recipe.link} className="recipe-list-item-link">
                                <div className="recipe-list-item-image" style={{backgroundImage: `url(${recipe.imageUrl})`}}/>
                                <p className="recipe-list-item-name">{recipe.name}</p>
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default RecipeList;
