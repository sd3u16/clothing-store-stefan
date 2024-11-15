import './category-item.styles.scss'


import React from 'react'

const CategoryItem = ({  category  }) => {

    const {imageUrl, title} = category;

  return (<div  className="category-container">     
    <img className='background-image' src={`${imageUrl}`} alt="" />
     <div className="category-body-container">
         <h2>{title}</h2>
         <p>Shop Now</p>
       </div>
   
   </div>
  )
}

export default CategoryItem