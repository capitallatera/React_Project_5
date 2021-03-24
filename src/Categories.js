import React from 'react';

const Categories = ({ categoryItems,filterItems})=>{
    // console.log(categoryItems)
    return (
        
        <div className="btn-container">
           {
               categoryItems.map((item,index)=>{
                   return(
                       <button type="button" key={index} className="filter-btn" onClick={()=>filterItems(item)}>{item}</button>
                   )
               })
           }
                
        </div>
    )
}

export default Categories;