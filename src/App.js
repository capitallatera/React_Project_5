import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Categories from './Categories'
import React, { useState } from 'react'
import items from './data'




function App() {
  const [menuItems,setMenuItems]=useState(items)
  const [categories,setCategories]=useState([])
  
  
  const categoryItems = ["all",...new Set(items.map((item) => item.category))]
  

  const filterItems=(category)=>{
    if (category=="all"){
      setMenuItems(items)
      return;
    }

    const newItems = items.filter((item) =>
      item.category == category
    )
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categoryItems={categoryItems} filterItems={filterItems} />    
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
