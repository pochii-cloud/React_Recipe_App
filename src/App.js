import { useEffect, useState } from 'react';
import axios from "axios";
import Recipe from './Recipe/Recipe';
import './index.css'


// const APIKEY='5e484bb46580cf5555266d661316b3f6'
// const APPLICATIONID='db2d13b4'
function App() {
  const[recipe,setRecipe]=useState([]);
  const[search,setSearch]=useState('');
  const[query,setQuery]=useState('banana')

  useEffect(()=>{
    axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=db2d13b4&app_key=5e484bb46580cf5555266d661316b3f6`)
    .then((response)=>{
      setRecipe(response.data.hits)
      console.log(response.data.hits)
    })
 },[query])


 const searchQuery=(e)=>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
 }
  return (
    <>
    <div className="App">
    <nav className="navbar navbar-dark fixed-top bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EDAMAM RECIPES</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"></a>
        </li>
      </ul>
      <div className='container'>
      <form className="d-flex" role="search" onSubmit={searchQuery}>
      <input className="form-control me-2" type="search" placeholder="Search Recipe" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
    </div>
  </div>
</nav>
      <h3 className='heading'>Search Your Favourite Recipes</h3>
     <div className='grid'>
        
        {recipe.map((data)=>
        <Recipe key={data.recipe.label}  label={data.recipe.label} image={data.recipe.image} ingredients={data.recipe.ingredientLines}/>)}

</div>

<div className='footer text-white text-center bg-dark p-2 w-100'>
  <p>&copy;<a className='tel' href='tel:0706219186'>pochii </a>2023</p>
</div>
    </div>
  
    </>
  );
}

export default App;
