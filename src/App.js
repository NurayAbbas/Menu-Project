import { useEffect, useState } from "react";
import Recipes from "./Recipe";
const App = () => {
  const APP_ID = "860bafb9";
  const APP_KEY = "7d29aae4d26f3377770fbf21db5da77c	";
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery]= useState('banana')
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
const updateSearch = (e) =>{
  setSearch(e.target.value)

}
const getSearch = (e)=>{
  e.preventDefault()
  setQuery(search)
}
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipes
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default App;

// import React from "react";
// import { useEffect, useState } from "react";
// import Recipe from "./Recipe";
// const App = () => {
//   const APP_ID = "860bafb9";
//   const APP_KEY = "7d29aae4d26f3377770fbf21db5da77c	";
//   const [recipes, setResipec] = useState([]);
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("chicken");

//   const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     const data = await response.json();
//     setResipec(data.hits);
//     console.log(data.hits);
//   };

//   const updateSearch = (e) => {
//     setSearch(e.target.value);
//   };
//   const getSearch = (e) => {
//     e.preventDefault();
//     setQuery(search);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={getSearch} className="search-form">
//         <input
//           className="search-bar"
//           type="text"
//           value={search}
//           onChange={updateSearch}
//         />
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>
//       {recipes.map((recipe) => (
//         <Recipe
//           key={recipe.recipe.label}
//           title={recipe.recipe.label}
//           calories={recipe.recipe.calories}
//           image={recipe.recipe.image}
//           ingredients={recipe.recipe.ingredients}
//         />
//       ))}
//     </div>
//   );
// };
// export default App;
