import React from 'react'
import '../index.css'
const Recipe = ({label,image,ingredients}) => {
  return (
    <>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start p-2" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{label}</h5><hr/>
        <div className="card-text">
        <span className="badge rounded-pill text-bg-success">Ingredients</span>
            {ingredients.map((ingredient)=><ul>
              <li>{ingredient}</li>
            </ul>)}
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Recipe
