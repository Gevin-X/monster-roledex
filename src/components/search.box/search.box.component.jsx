import React from 'react'
import './serche.box.style.css';

export  const SearchBox = ({placeholder , handleChange}) => (
<input className = 'search3'
type='search' 
placeholder={placeholder} 
onChange={handleChange}/>
    )

